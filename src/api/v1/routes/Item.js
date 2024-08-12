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

// Create item
router.post("/create", AuthenticateUser, AuthorizeUser(["user"]), CreateItem);

// Get all item
router.get(
  "/all",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetAllItemByUserId
);

// Get item by id
router.get(
  "/collection/:collectionId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  GetAllItemByCollectionId
);

// Get item by id
router.get("/:itemId", AuthenticateUser, AuthorizeUser(["user"]), GetItemById);

// Update item by id
router.put("/:itemId", AuthenticateUser, AuthorizeUser(["dev"]), GetItemById);

// Delete user by id
router.delete(
  "/:itemId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  DeleteItemById
);

module.exports = router;
