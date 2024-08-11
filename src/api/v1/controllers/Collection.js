// ----------Third-party libraries and modules----------
const validator = require("validator");
const mongoose = require("mongoose");

// ----------Custom libraries and modules----------
const { CollectionModel } = require("../models");
const Configs = require("../../../configs");

// ----------Conroller function to register new Collection----------
const CreateCollection = async (req, res) => {
  // Request body
  const { name, description } = req.body;
  const { id } = req.user;

  try {
    //check if fields are empty
    if (!name) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Please fill all fields.",
        },
      });
    }

    //check name length
    if (
      !validator.isLength(name, {
        min: 2,
        max: 25,
      })
    ) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Plase make sure name is between 2 and 16 characters.",
        },
      });
    }

    // Check if name already exist
    const collection = await CollectionModel.findOne({ name }).exec();
    if (collection) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "Please try again with a different name, this name already exist.",
        },
      });
    }

    // New Collection
    const newCollection = new CollectionModel({
      name,
      description,
      userId: id,
    });

    // Save new Collection to the database
    const savedCollection = await newCollection.save();

    return res.status(201).json({
      status: true,
      Collection: savedCollection,
      success: {
        message: "Successfully created a new collection!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to created a new collection!",
      },
    });
  }
};

// ----------Conroller function to get Collections----------
const GetAllCollectionByUserId = async (req, res) => {
  const { id } = req.user;
  const objectId = new mongoose.Types.ObjectId(id);

  try {
    const collection = await CollectionModel.find({ userId: objectId }).exec();

    return res.status(200).json({
      status: true,
      collection,
      success: {
        message: "Successfully fetched all collection!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the collection!",
      },
    });
  }
};

// ----------Conroller function to get Collection by id----------
const GetCollectionById = async (req, res) => {
  // Request parameters
  const { collectionId } = req.params;

  try {
    const collection = await CollectionModel.findOne({
      _id: collectionId,
    }).exec();

    return res.status(200).json({
      status: true,
      collection,
      success: {
        message: "Successfully fetched the collection!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the collection!",
      },
    });
  }
};

// ----------Conroller function to delete Collection by id----------
const DeleteCollectionById = async (req, res) => {
  // Request parameters
  const { collectionId } = req.params;

  const { id } = req.user;

  try {
    const collection = await CollectionModel.findById(collectionId);

    if (!collection) {
      return res.json({
        status: false,
        error: { message: "Collection not found!" },
      });
    }

    if (collection.userId.toString() !== id) {
      return res.json({
        status: false,
        error: { message: "You can delete only your collection!!" },
      });
    }

    const deleteCollection = await CollectionModel.findOneAndDelete({
      _id: collectionId,
    }).exec();

    return res.status(200).json({
      status: true,
      success: {
        message: "Collection successfully deleted!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to delete the Collection!",
      },
    });
  }
};

module.exports = {
  CreateCollection,
  GetAllCollectionByUserId,
  GetCollectionById,
  DeleteCollectionById,
};
