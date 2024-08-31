const fs = require("fs");

//test

// ----------Conroller function to get Collections----------
const uploadFile = async (req, res) => {
  const file = req.file;

  try {
    return res.status(200).json({
      status: true,
      file,
      success: {
        message: "Successfully upload the file!",
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      error: {
        message: "Failed to upload the file!",
      },
    });
  }
};

const downloadFile = async (req, res) => {
  const filePath = req.query.filePath;

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      status: false,
      error: {
        message: "File does not exist",
      },
    });
  }

  res.download(filePath);
};

module.exports = {
  uploadFile,
  downloadFile,
};
