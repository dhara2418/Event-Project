const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");

router.get("/", eventController.index);

router.get("/add", eventController.create);

router.post("/store", eventController.store);

router.get("/edit/:id", eventController.edit);

router.post("/update/:id", eventController.update);

router.get("/delete/:id", eventController.delete);

module.exports = router;