const todos = require("express").Router();

const {
  getAlltodos,
  addSingleToDO,
  //   updateSingletodo,
  //   deletetodo,
} = require("../queries/todo");

todos.get("/", getAlltodos);
todos.post("/", addSingleToDO);
// todos.patch("/:id", updateSingletodo);
// todos.delete("/:id", deletetodo);

module.exports = todos;
