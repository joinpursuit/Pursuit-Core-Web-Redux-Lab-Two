const todos = require("express").Router();
const { getTodosById } = require("../queries/addTodoQueries/addTodoQuery");

todos.get("/", getTodosById);


module.exports = todos;
