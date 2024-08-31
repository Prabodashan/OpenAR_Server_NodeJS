// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");
const validator = require("validator");

// ----------User schema----------
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide your name"],
    },
    emailAddress: {
      type: String,
      required: [true, "Please provide tour email address"],
      unqiue: [true, "This email address already exist"],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
      minLength: [
        6,
        "Plase make sure your password is atleast 6 characters long",
      ],
      maxLength: [
        128,
        "Plase make sure your password is less than 128 characters long",
      ],
    },
    phoneNumber: {
      type: Number,
    },
    userType: {
      type: String,
      required: [true, "Please provide user type"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

//test
