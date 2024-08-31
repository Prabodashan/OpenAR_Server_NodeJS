// ----------Third-party libraries & modules----------
const express = require("express");

// ----------Custom libraries & modules----------
const { uploadFile, downloadFile } = require("../controllers");
const { single } = require("../middlewares");

// Initialize the router
const router = express.Router();

// Upload File
router.post("/upload", single, uploadFile);

// Download File
router.get("/download", downloadFile);

module.exports = router;

//test
