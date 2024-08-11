// ----------Third-party libraries and modules----------
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// ----------Custom libraries and modules----------
const { UserModel, UserTokenModel } = require("../models");
const { GenerateTokens, SendEmail } = require("../helpers");
const Configs = require("../../../configs");

// ----------Conroller function to register new user----------
const CreateUser = async (req, res) => {
  // Request body
  const { fullName, emailAddress, password, phoneNumber, userType } = req.body;

  try {
    //check if fields are empty
    if (!fullName || !emailAddress || !password) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Please fill all fields.",
        },
      });
    }

    //check name length
    if (
      !validator.isLength(fullName, {
        min: 2,
        max: 25,
      })
    ) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Plase make sure your name is between 2 and 16 characters.",
        },
      });
    }

    //check if email address is valid
    if (!validator.isEmail(emailAddress)) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Please make sure to provide a valid email address.",
        },
      });
    }

    //check password length
    if (
      !validator.isLength(password, {
        min: 6,
        max: 128,
      })
    ) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "Please make sure your password is between 6 and 128 characters.",
        },
      });
    }

    // Check if email or phone number already exist
    const user = await UserModel.findOne({ emailAddress }).exec();
    if (user) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "Please try again with a different email address, this email already exist.",
        },
      });
    }

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 8);

    // New user
    const newUser = new UserModel({
      fullName,
      emailAddress,
      password: hashedPassword,
      phoneNumber,
      userType,
    });

    // Save new user to the database
    const savedUser = await newUser.save();

    return res.status(201).json({
      status: true,
      user: savedUser,
      success: {
        message: "Successfully registered a new user!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to register a new user!",
      },
    });
  }
};

// ----------Conroller function to login the user----------
const LoginUser = async (req, res) => {
  // Request body
  const { emailAddress, password } = req.body;

  try {
    // Check if email exists
    const user = await UserModel.findOne({ emailAddress }).exec();
    if (!user) {
      return res.json({
        status: false,
        error: { message: "User not found for the giving credentials!" },
      });
    }

    // Check if password matches
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.json({
        status: false,
        error: { message: "Invalid credentials!" },
      });
    }

    // Check if user id already exists
    const userToken = await UserTokenModel.findOne({ userId: user._id }).exec();
    if (userToken) {
      // Delete the token record
      await userToken.deleteOne({ userId: user._id });
    }

    // Generate tokens
    const { accessToken, refreshToken } = GenerateTokens(user);

    // New token
    const newToken = new UserTokenModel({
      userId: user._id,
      token: refreshToken,
    });

    // Save new refresh token record to the database
    await newToken.save();

    return res.status(201).json({
      status: true,
      accessToken,
      refreshToken,
      userId: user._id,
      userType: user.userType,
      success: {
        message: "Successfully logged in the user!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to logged in the user!",
      },
    });
  }
};

// ----------Conroller function to get users----------
const GetAllUser = async (req, res) => {
  try {
    const user = await UserModel.find().select("-password").exec();
    return res.status(200).json({
      status: true,
      user,
      success: {
        message: "Successfully fetched all users!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the user!",
      },
    });
  }
};

// ----------Conroller function to get user by id----------
const GetUserById = async (req, res) => {
  // Request parameters
  const { userId } = req.params;

  try {
    const user = await UserModel.findOne({ _id: userId })
      .select("-password")
      .exec();
    return res.status(200).json({
      status: true,
      user,
      success: {
        message: "Successfully fetched the user!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the user!",
      },
    });
  }
};

// ----------Conroller function to delete user by id----------
const DeleteUserById = async (req, res) => {
  // Request parameters
  const { userId } = req.params;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.json({
        status: false,
        error: { message: "User not found!" },
      });
    }
    const deleteUser = await UserModel.findOneAndDelete({
      _id: userId,
    }).exec();

    return res.status(200).json({
      status: true,
      user,
      success: {
        message: "User successfully deleted!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to delete the user!",
      },
    });
  }
};

const ForgetPassword = async (req, res) => {
  const { emailAddress } = req.body;
  try {
    // Check if email already exists
    const user = await UserModel.findOne({ emailAddress }).exec();
    if (!user) {
      return res.json({
        status: false,
        error: { message: "User not found for the giving email!" },
      });
    }

    const token = jwt.sign({ id: user._id }, Configs.JWT_ACCESS_KEY, {
      expiresIn: "15m",
    });

    const userId = user._id;
    const resetUrl = `${Configs.BASE_URL}/reset-password/${userId}/${token}/`;

    const result = await SendEmail({
      name: user.fullName,
      email: user.emailAddress,
      subject: "Password Reset",
      htmlContent: resetUrl,
    });

    if (result.status != "success") {
      return res.status(500).json({
        status: false,
        error: {
          message: "Internal Server Error. Please try again later",
        },
      });
    }
    return res.status(200).send({
      status: true,
      success: {
        message: "Password reset link sent to your email account",
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Internal Server Error. Please try again later",
      },
    });
  }
};

const ResetPassword = async (req, res) => {
  const { token, id } = req.params;

  try {
    const data = jwt.verify(token, Configs.JWT_ACCESS_KEY);

    if (data.id != id) {
      return res.status(403).json({
        status: false,
        error: {
          message: "Invalid token, Try again!",
        },
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    await UserModel.findByIdAndUpdate(
      data.id,
      {
        $set: { password: hashedPassword },
      },
      { new: true }
    );

    // jwt.destroy(token);
    return res.status(200).send({
      status: true,
      success: {
        message: "Password has been updated",
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(403)
      .json({ status: false, error: { message: "Invalid token, Try again!" } });
  }
};

module.exports = {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  DeleteUserById,
  ForgetPassword,
  ResetPassword,
};
