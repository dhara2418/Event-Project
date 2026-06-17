const express = require("express");
const router = express.Router();

const rsvpController = require("../controllers/rsvpController");

router.post("/store",rsvpController.store);

router.get("/",rsvpController.index);

router.get("/delete/:id",rsvpController.delete);

module.exports = router;