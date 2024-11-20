const express = require("express");
const routerLogic = require("../controller/user-controller");

const router = express.Router();

router.post("/signup",routerLogic.Signup);
router.post("/login",routerLogic.Login);
router.post("/logout",routerLogic.Logout);

module.exports = router;