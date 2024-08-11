// ----------Third-party libraries & modules----------
const express = require("express");

// ----------Custom libraries & modules----------
const {
  CreateCollection,
  GetAllCollectionByUserId,
  GetCollectionById,
  DeleteCollectionById,
} = require("../controllers");
const { AuthenticateUser, AuthorizeUser } = require("../middlewares");

// Initialize the router
const router = express.Router();

// Create Collection
router.post(
  "/create",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  CreateCollection
);

// Get all user
router.get(
  "/all",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetAllCollectionByUserId
);

// Get user by id
router.get(
  "/:collectionId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetCollectionById
);

// Delete user by id
router.delete(
  "/:collectionId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  DeleteCollectionById
);

module.exports = router;
