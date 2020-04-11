const toDo = require("express").Router()
const {
    addNewTodo,
    fetchTodos
} = require("../queries/toDoQueries")

toDo.get("/", fetchTodos)
toDo.post("/addTodo", addNewTodo)

module.exports = toDo;