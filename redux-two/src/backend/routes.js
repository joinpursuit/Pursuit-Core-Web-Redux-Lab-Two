const todos = require("express").Router()

const {createTodo, deleteTodo, getTodo} = require("../../Queries/TodoQueries")

todos.post("/", createTodo)

todos.delete("/:id", deleteTodo)

todos.get("/:username", getTodo)


module.exports = todos;
