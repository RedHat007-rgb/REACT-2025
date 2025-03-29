const Task = require("../models/model");
const getAllTAsks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch {
    res
      .status(500)
      .send("Sorry,Server is down...PLease try after sometime.....");
  }
};

const createPost = async (req, res) => {
  try {
    await Task.create(req.body);
    res.status(201).send("TAsk has been created...");
  } catch {
    res
      .status(500)
      .send("Sorry,Server is down...PLease try after sometime.....");
  }
};

module.exports = { getAllTAsks, createPost };
