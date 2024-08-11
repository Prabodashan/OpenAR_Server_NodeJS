// ----------Third-party libraries & modules----------
const express = require("express");

// ----------Custom libraries & modules----------
const {
  CreateUser,
  LoginUser,
  GetAllUser,
  GetUserById,
  DeleteUserById,
  ForgetPassword,
  ResetPassword,
} = require("../controllers");
const { AuthenticateUser, AuthorizeUser } = require("../middlewares");

// Initialize the router
const router = express.Router();

// Register user
router.post("/create", AuthenticateUser, AuthorizeUser(["admin"]), CreateUser);

// Login user
router.post("/login", LoginUser);

// forget Password user
router.post("/forget-password", ForgetPassword);

// Reset Password user
router.post("/reset-password/:id/:token", ResetPassword);

// Get all user
router.get("/all", AuthenticateUser, AuthorizeUser(["admin"]), GetAllUser);

// Get user by id
router.get("/:userId", AuthenticateUser, AuthorizeUser(["admin"]), GetUserById);

// Delete user by id
router.delete(
  "/:userId",
  AuthenticateUser,
  AuthorizeUser(["admin"]),
  DeleteUserById
);

module.exports = router;
