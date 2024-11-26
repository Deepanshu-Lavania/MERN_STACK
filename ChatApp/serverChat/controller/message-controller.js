const Conversation = require("../models/conversational-model");
const Message = require("../models/message-model");

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
      await Promise.all([conversation.save(), newMessage.save()]);
      res
        .status(201)
        .json({ message: "Message sent successfully", newMessage });
    
  } catch (error) {
    console.log("Error in Sending message " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = SendMessage;
