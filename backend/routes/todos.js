const todos = require('express').Router();

const { getAllTodos, createTodo } = require('../queries/todos');

todos.get('/', getAllTodos);

todos.post('/', createTodo);

module.exports = todos;