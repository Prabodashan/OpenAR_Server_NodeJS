// ----------Third-party libraries & modules----------
const express = require("express");

// ----------Custom libraries & modules----------
const {
  CreateItem,
  GetAllItem,
  GetAllItemByUserId,
  GetAllItemByCollectionId,
  GetItemById,
  DeleteItemById,
  UpdateItemById,
} = require("../controllers");
const { AuthenticateUser, AuthorizeUser } = require("../middlewares");

// Initialize the router
const router = express.Router();

// Create item
router.post("/create", AuthenticateUser, AuthorizeUser(["user"]), CreateItem);

// Get all item
router.get("/all", GetAllItem);

// Get all item
router.get(
  "/all/user",
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
router.get(
  "/:itemId",
  AuthenticateUser,
  AuthorizeUser(["user", "dev"]),
  GetItemById
);

// Update item by id
router.put(
  "/:itemId",
  AuthenticateUser,
  AuthorizeUser(["dev"]),
  UpdateItemById
);

// Delete user by id
router.delete(
  "/:itemId",
  AuthenticateUser,
  AuthorizeUser(["user"]),
  DeleteItemById
);

module.exports = router;
