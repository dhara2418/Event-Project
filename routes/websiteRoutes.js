const express = require("express");
const router = express.Router();

const websiteController = require("../controllers/websiteController");

router.get("/", websiteController.home);

router.get("/about", websiteController.about);

router.get("/gallery", websiteController.gallery);

router.get("/services", websiteController.services);

router.get("/contact", websiteController.contact);

module.exports = router;