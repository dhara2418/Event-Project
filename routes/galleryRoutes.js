const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const galleryController = require("../controllers/galleryController");

router.get("/",galleryController.index);

router.get("/add",galleryController.create);

router.post("/store",
upload.single("image"),
galleryController.store);

router.get("/edit/:id",
galleryController.edit);

router.post("/update/:id",
galleryController.update);

router.get("/delete/:id",
galleryController.delete);

module.exports = router;