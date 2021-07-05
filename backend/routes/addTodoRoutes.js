const todos = require("express").Router();
const { getTodos } = require("../queries/addTodoQueries/addTodoQuery");

todos.get("/", getTodos);


module.exports = todos;
