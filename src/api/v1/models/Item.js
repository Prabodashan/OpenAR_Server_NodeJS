// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------User schema----------
const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide item name"],
    },
    description: {
      type: String,
    },
    file: {
      type: String,
    },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please provide collection id"],
      ref: "Collection",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please provide user id"],
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
