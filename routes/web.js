const express = require("express");
const {
  getAllToDo,
  addToDo,
  getToDoById,
  deleteTodoById,
} = require("../controller/ToDoController");
const router = express.Router();

// blog routes
router.get("/todo/:email", getAllToDo);
router.post("/todo", addToDo);
router.delete("/todo/:id", deleteTodoById);
router.get("/todo/:id", getToDoById);

module.exports = router;
