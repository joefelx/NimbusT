const multer = require("multer");
const checkMimeType = require("./checkMimeType");

// Storage Middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    let filename = checkMimeType(file.mimetype);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
