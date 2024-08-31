// ----------Third-party libraries & modules----------
const mongoose = require("mongoose");

// ----------User schema----------
const CollectionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide collection name"],
    },
    description: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please provide user id"],
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", CollectionSchema);

//test
