// models/KnowledgeBase.js
const mongoose = require('mongoose');

const KnowledgeBaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const KnowledgeBase = mongoose.model('KnowledgeBase', KnowledgeBaseSchema);

module.exports = KnowledgeBase;