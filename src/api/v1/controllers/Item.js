// ----------Third-party libraries and modules----------
const validator = require("validator");
const mongoose = require("mongoose");

// ----------Custom libraries and modules----------
const { ItemModel } = require("../models");

// ----------Conroller function to register new Item----------
const CreateItem = async (req, res) => {
  // Request body
  const { name, description, file, collectionId } = req.body;
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
    if (!collectionId) {
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
    const item = await ItemModel.findOne({ name }).exec();
    if (item) {
      return res.status(400).json({
        status: false,
        error: {
          message:
            "Please try again with a different name, this name already exist.",
        },
      });
    }

    // New Item
    const newItem = new ItemModel({
      name,
      description,
      file,
      collectionId,
      userId: id,
    });

    // Save new Item to the database
    const savedItem = await newItem.save();

    return res.status(201).json({
      status: true,
      Item: savedItem,
      success: {
        message: "Successfully created a new item!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to created a new item!",
      },
    });
  }
};

// ----------Conroller function to get Items----------
const GetAllItemByUserId = async (req, res) => {
  const { id } = req.user;
  const objectId = new mongoose.Types.ObjectId(id);

  try {
    const items = await ItemModel.find({ userId: objectId })
      .populate({
        path: "collectionId",
        select: "name description", // Select specific fields from the Collection schema
      })
      .exec();

    const item = items.map((data) => ({
      _id: data._id,
      name: data.name,
      description: data.description,
      file: data.file,
      collectionId: data.collectionId._id,
      collectionName: data.collectionId.name,
      collectionDescription: data.collectionId.description,
      userId: data.userId,
    }));

    return res.status(200).json({
      status: true,
      item,
      success: {
        message: "Successfully fetched all item!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the item!",
      },
    });
  }
};

// ----------Conroller function to get Items----------
const GetAllItemByCollectionId = async (req, res) => {
  // Request parameters
  const { collectionId } = req.params;
  const objectId = new mongoose.Types.ObjectId(collectionId);

  try {
    const items = await ItemModel.find({ collectionId: objectId })
      .populate({
        path: "collectionId",
        select: "name description", // Select specific fields from the Collection schema
      })
      .exec();

    const item = items.map((data) => ({
      _id: data._id,
      name: data.name,
      description: data.description,
      file: data.file,
      collectionId: data.collectionId._id,
      collectionName: data.collectionId.name,
      collectionDescription: data.collectionId.description,
      userId: data.userId,
    }));

    return res.status(200).json({
      status: true,
      item,
      success: {
        message: "Successfully fetched all item!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the item!",
      },
    });
  }
};

// ----------Conroller function to get Item by id----------
const GetItemById = async (req, res) => {
  // Request parameters
  const { itemId } = req.params;

  try {
    const items = await ItemModel.findOne({ _id: itemId })
      .populate({
        path: "collectionId",
        select: "name description", // Select specific fields from the Collection schema
      })
      .exec();

    const item = {
      _id: items._id,
      name: items.name,
      description: items.description,
      file: items.file,
      collectionId: items.collectionId._id,
      collectionName: items.collectionId.name,
      collectionDescription: items.collectionId.description,
      userId: items.userId,
    };

    return res.status(200).json({
      status: true,
      item,
      success: {
        message: "Successfully fetched the item!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to fetch the item!",
      },
    });
  }
};

// ----------Controller function to update status and devId----------
const UpdateItemById = async (req, res) => {
  const { status } = req.body;
  const { itemId } = req.params;
  const { id } = req.user; // Get devId from req.user

  try {
    // Check if the status field is empty
    if (!status) {
      return res.status(400).json({
        status: false,
        error: {
          message: "Please provide a status.",
        },
      });
    }

    // Check if the item exists
    const item = await ItemModel.findById(itemId).exec();
    if (!item) {
      return res.status(404).json({
        status: false,
        error: {
          message: "Item not found.",
        },
      });
    }

    // Update the item
    item.status = status;
    item.devId = id; // Update devId from req.user

    // Save the updated item to the database
    const updatedItem = await item.save();

    return res.status(200).json({
      status: true,
      item: updatedItem,
      success: {
        message: "Successfully updated item!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to update item!",
      },
    });
  }
};

// ----------Conroller function to delete Item by id----------
const DeleteItemById = async (req, res) => {
  // Request parameters
  const { itemId } = req.params;

  const { id } = req.user;

  try {
    const item = await ItemModel.findById(itemId);

    if (!item) {
      return res.json({
        status: false,
        error: { message: "Item not found!" },
      });
    }

    if (item.userId.toString() !== id) {
      return res.json({
        status: false,
        error: { message: "You can delete only your item!" },
      });
    }

    if (item.status !== "created") {
      return res.json({
        status: false,
        error: { message: "You can delete only your item before dev process!" },
      });
    }

    const deleteItem = await ItemModel.findOneAndDelete({
      _id: itemId,
    }).exec();

    return res.status(200).json({
      status: true,
      success: {
        message: "Item successfully deleted!",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to delete the Item!",
      },
    });
  }
};

module.exports = {
  CreateItem,
  GetAllItemByUserId,
  GetAllItemByCollectionId,
  GetItemById,
  UpdateItemById,
  DeleteItemById,
};
