const User = require("../models/user-model");
const Contact = require("../models/contact-models");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log("admin users data :===> ", users);

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
/* User Update logic */
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await User.findOne({ _id: userId }, { password: 0 });
    if (!data) {
      console.log("User not found for update by params id");
      return res
        .status(404)
        .json({ Message: "User not found for update by params id" });
    }
    console.log("get data through backend for updation : ",data);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
/* User delete logic */
const deleteUsersById = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await User.deleteOne({ _id: userId });
    if (!result) {
      console.log("User not found for delete by params id");
      return res
        .status(404)
        .json({ Message: "User not found for delete by params id" });
    }
    return res.status(200).json({ Message: "User Delete successfully" });
  } catch (error) {
    next(error);
  }
};

const getAllContactData = async (req, res) => {
  try {
    const adminContacts = await Contact.find();
    console.log("admin contact data :===> ", adminContacts);

    if (!adminContacts || adminContacts.length === 0) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(adminContacts);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getAllContactData,
  deleteUsersById,
  getUserById,
};