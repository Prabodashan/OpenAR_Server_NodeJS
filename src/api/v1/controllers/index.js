// ----------Imports----------
const {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  DeleteUserById,
  ForgetPassword,
  ResetPassword,
} = require("./User");
const {
  GenerateAccessToken,
  DeleteRefreshToken,
  GetUserInfoByToken,
} = require("./UserToken");
const {
  CreateCollection,
  GetAllCollectionByUserId,
  GetCollectionById,
  DeleteCollectionById,
} = require("./Collection");

// ----------Exports----------
module.exports = {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  DeleteUserById,
  GenerateAccessToken,
  DeleteRefreshToken,
  GetUserInfoByToken,
  ForgetPassword,
  ResetPassword,
  CreateCollection,
  GetAllCollectionByUserId,
  GetCollectionById,
  DeleteCollectionById,
};
