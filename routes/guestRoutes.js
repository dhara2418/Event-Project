const express = require("express");
const router = express.Router();

const guestController = require("../controllers/guestController");

router.get("/",guestController.index);

router.get("/add",guestController.create);

router.post("/store",guestController.store);

router.get("/edit/:id",guestController.edit);

router.post("/update/:id",guestController.update);

router.get("/delete/:id",guestController.delete);

module.exports = router;