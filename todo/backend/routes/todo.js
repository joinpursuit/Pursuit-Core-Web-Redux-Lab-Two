const todos = require("express").Router();

const {
  getAlltodos,
  addSingleToDO,
  toggleTodo,
  //   updateSingletodo,
  //   deletetodo,
} = require("../queries/todo");

todos.get("/", getAlltodos);
todos.post("/", addSingleToDO);
todos.patch("/:id", toggleTodo);
// todos.patch("/:id", updateSingletodo);
// todos.delete("/:id", deletetodo);

module.exports = todos;
