const express = require("express");
const adminControllerData = require("../controllers/admin-controller");
const authmiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

// /* Check Admin */
// router.route("/checkAdmin").get(adminMiddleware);

/* to access data from database */
router
  .route("/users")
  .get(authmiddleware, adminMiddleware, adminControllerData.getAllUsers); //next() middleware is important to pass it nextOne

/* get data from database */
router
  .route("/users/:id")
  .get(authmiddleware, adminMiddleware, adminControllerData.getUserById);

/* update data from database */
router
  .route("/users/update/:id")
  .patch(authmiddleware, adminMiddleware, adminControllerData.updateUserById);

/* Delete user data from database */
router
  .route("/users/delete/:id")
  .delete(authmiddleware, adminMiddleware, adminControllerData.deleteUsersById);

router
  .route("/contacts")
  .get(authmiddleware, adminMiddleware, adminControllerData.getAllContactData);

router
  .route("/contacts/delete/:id")
  .delete(authmiddleware,adminMiddleware,adminControllerData.deleteContactById);

module.exports = router;
