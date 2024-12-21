const express = require("express");
const multer = require("multer");
const router = express.Router();

// Set up Multer for file uploads
const upload = multer({ dest: "uploads/" });

// Route to handle file upload
router.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "File uploaded successfully!" });
});

module.exports = router;
