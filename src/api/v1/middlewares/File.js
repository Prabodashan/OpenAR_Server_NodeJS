const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = "./uploads/" + req.query.folderName;
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.single = multer({
  storage: storage,
}).single("file");
