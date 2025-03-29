const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide the title to create a task."],
  },
  deadline: {
    type: String,
    required: [true, "please provide the date to save the deadline."],
  },
  description: {
    type: String,
    required: [true, "please provide the description"],
  },
});

module.exports = mongoose.model("Task", taskSchema);
