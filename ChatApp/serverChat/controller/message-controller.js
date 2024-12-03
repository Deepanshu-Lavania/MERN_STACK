const { default: mongoose } = require("mongoose");
const Conversation = require("../models/conversational-model");
const Message = require("../models/message-model");
const { getReceiverSocketId, io } = require("../SocketIO/socket");

const SendMessage = async (req, res) => {
  //   console.log("message send to sunfire Sensei ", req.params.id, req.body.message);
  try {
    //* Extract Message and Participant IDs
    const { message } = req.body;
    const { id: receiverId } = req.params; //*const receiverId = req.params.id;
    const senderId = req.user._id; //current loggedIn user id through authorised middleware

    //* Check for Existing Conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    //* Create New Conversation if None Exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
      console.log("new conversation is : ", conversation);
    }
    //* Create New Message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    //* Save Message and Link It to Conversation
    /* if (newMessage) {
            await newMessage.save();
            conversation.message.push(newMessage._id);
            await conversation.save();
            res.status(201).json({message:"Message sent successfully"});
        } */
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    //! Run parallel : message save in dataBase and also message send to reciever without taking time
    await Promise.all([conversation.save(), newMessage.save()]);
    const recieverSocketId = getReceiverSocketId(receiverId);
    console.log(
      "recieverSocketId  during both are online  =======> ",
      recieverSocketId
    );

    console.log("live message in message-controller.js is =======> ",newMessage  );

    if (recieverSocketId) {
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }
    /*  1. The io.to(socketId) method targets a specific connected socket (client) using its unique socketId.
    In this case, recieverSocketId represents the unique identifier for a client connected to the server.

    2.emit("newMessage", newMessage):
    The emit method sends an event to the targeted socket (client).
    The first argument, "newMessage", is the name of the event.
    The second argument, newMessage, is the data (payload) being sent to the client. This could be any JavaScript object, such as a message string, an object, or any other serializable data. */

    //!ImpNote: chekc this
    res.status(201).json({ message: newMessage.message });
    // res.status(201).json({message:"message sent successfuly", newMessage });
  } catch (error) {
    console.log("Error in Sending message for message-controller " + error);
    res
      .status(500)
      .json({
        message:
          "Internal server error during send message for message-controller",
      });
  }
};
const getMessage = async (req, res) => {
  try {
    const chatUser = req.params.id.trim();
    const sendId = req.user._id;
    const senderId = sendId.toString().trim();

    console.log("Sender ID to get allMessage : ", senderId);
    console.log("Chat User ID to get allMessage : ", chatUser);

    // Validate ObjectId
    if (
      !mongoose.Types.ObjectId.isValid(chatUser) ||
      !mongoose.Types.ObjectId.isValid(senderId)
    ) {
      console.log("Invalid participant ID(s)");

      return res.status(400).json({ message: "Invalid participant ID(s)" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatUser] },
    }).populate("messages");
    if (!conversation) {
      return res.status(201).json([]);
    }
    const Messages = conversation.messages; //conversation model messages
    res.status(201).json(Messages);
  } catch (error) {
    console.log("Error in getting message " + error);
    res
      .status(500)
      .json({ message: "Internal server error during getting message" });
  }
};
module.exports = { SendMessage, getMessage };
