const express = require("express");
const router = express.Router();
const Message = require("../models/message");

// POST message
router.post("/", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    const newMessage = new Message({
      fullName,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
// GET all messages
router.get("/", async (req, res) => {
  try {
    // Fetch all messages from MongoDB
    const messages = await Message.find();

    // Send response
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
// DELETE message by ID
router.delete("/:id", async (req, res) => {
  try {
    // Get the ID from the URL
    const id = req.params.id;

    // Find the message by ID and delete it
    const deletedMessage = await Message.findByIdAndDelete(id);

    // Check if the message exists
    if (!deletedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
      data: deletedMessage,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
// UPDATE message by ID
router.put("/:id", async (req, res) => {
  try {
    // Get ID from URL
    const id = req.params.id;

    // Get updated data from request body
    const { fullName, email, message } = req.body;

    // Find the document and update it
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      {
        fullName,
        email,
        message,
      },
      {
        new: true,          // Return updated document
        runValidators: true // Apply schema validation
      }
    );

    // Check if message exists
    if (!updatedMessage) {
      return res.status(404).json({
        success: false,
        message: "Message not found",
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: "Message updated successfully",
      data: updatedMessage,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});
module.exports = router;