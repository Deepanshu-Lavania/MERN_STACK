const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const validate = require("../middleware/validate-middleware");
const { contactSchema } = require("../models/validator-model");

router.route("/contact").post(validate(contactSchema),contactForm);

module.exports = router;