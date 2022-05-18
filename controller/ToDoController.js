const ToDo = require("../models/ToDoModel");

//getAllToDo
const getAllToDo = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await ToDo.find({ email: email });
    res.status(200).json(result);
  } catch (error) {
    res.status(403).json({
      msg: error.message,
    });
  }
};

// addToDo
const addToDo = async (req, res) => {
  try {
    const result = await ToDo.create(req.body);
    if (result) {
      res.status(201);
      res.json({
        success: true,
        msg: "ToDo Successfully Added!",
      });
    }
  } catch (error) {
    res.status(403).json({
      msg: error.message,
    });
  }
};

// get todo by id
const getToDoById = async (req, res) => {
  try {
    const result = await ToDo.findById(req.params.id);
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(401).res.json("ToDo not found");
    }
  } catch (error) {
    res.status(403).json({
      msg: error.message,
    });
  }
};

// delete
const deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await ToDo.findOne({ id });
    if (todo) {
      const result = await ToDo.findByIdAndDelete({ _id: id });
      if (result) {
        res.status(200).json({
          success: true,
          msg: "Todo Deleted Successfully!",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        msg: "Todo not found!",
      });
    }
  } catch (error) {
    res.status(403).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getAllToDo,
  addToDo,
  getToDoById,
  deleteTodoById,
};
