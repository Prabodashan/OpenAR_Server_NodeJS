// ----------Imports----------
const {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  ForgetPassword,
  ResetPassword,
} = require("./User");
const {
  GenerateAccessToken,
  DeleteRefreshToken,
  GetUserInfoByToken,
} = require("./UserToken");

// ----------Exports----------
module.exports = {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  GenerateAccessToken,
  DeleteRefreshToken,
  GetUserInfoByToken,
  ForgetPassword,
  ResetPassword,
};
