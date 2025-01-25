// models/Checklist.js
const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  procedure: {
    type: String,
    required: true
  },
  steps: [
    {
      stepName: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      options: [String] // Optional array of options for each step
    }
  ],
  archived: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Checklist = mongoose.model('Checklist', ChecklistSchema);

module.exports = Checklist;