// models/ChatbotLog.js
const mongoose = require('mongoose');

const ChatbotLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const ChatbotLog = mongoose.model('ChatbotLog', ChatbotLogSchema);

module.exports = ChatbotLog;