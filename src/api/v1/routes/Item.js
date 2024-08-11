// ----------Third-party libraries & modules----------
const express = require("express");

// ----------Custom libraries & modules----------
const {
  CreateItem,
  GetAllItemByUserId,
  GetAllItemByCollectionId,
  GetItemById,
  DeleteItemById,
} = require("../controllers");
const { AuthenticateUser, AuthorizeUser } = require("../middlewares");

// Initialize the router
const router = express.Router();

// Create Collection
router.post("/create", AuthenticateUser, AuthorizeUser(["user"]), CreateItem);

// Get all user
router.get(
  "/all",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetAllItemByUserId
);

// Get user by id
router.get(
  "/collection/:collectionId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetAllItemByCollectionId
);

// Get user by id
router.get("/:itemId", AuthenticateUser, AuthorizeUser(["user"]), GetItemById);

// Delete user by id
router.delete(
  "/:itemId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  DeleteItemById
);

module.exports = router;
