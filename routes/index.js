var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({ dest: "public/uploads" });
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/formsub", upload.single("meme"), function (req, res, next) {
  const newPath = `public/uploads/${req.file.originalname}`;
  fs.rename(req.file.path, newPath, (err) => {
    res.json("file uploaded");
  });
});

module.exports = router;
