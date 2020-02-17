/*
Joseph P. Pasaoa
TodosList Component | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import React from 'react';
import { connect } from 'react-redux';

import './TodosList.css';
import TodoCard from './TodoCard';


// MAIN
const TodosList = ({ todos }) => {
  let listTodos = null;
  if (todos.length) {
    listTodos = todos.filter(el => !!el).map(todo => {
        return (
          <TodoCard
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        );
    });
  }
  return (
    <ul>
      {listTodos}
    </ul>
  );
}


export default connect(state => state.todosState)(TodosList);
