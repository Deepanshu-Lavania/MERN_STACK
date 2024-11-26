const express = require("express");
const SendMessage = require("../controller/message-controller");
const authorisedMiddleware = require("../middleware/authorisedMiddleware");

const router = express.Router();

router.post("/send/:id",authorisedMiddleware,SendMessage);

module.exports =router;