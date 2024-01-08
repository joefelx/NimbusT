import multer from "multer";
import checkMimeType from "./checkMimeType";

// Storage Middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    let filename = checkMimeType(file.mimetype);
    cb(null, filename!);
  },
});

const upload = multer({ storage: storage });

export default upload;
