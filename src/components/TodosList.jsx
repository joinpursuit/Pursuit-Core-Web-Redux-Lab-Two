/*
Joseph P. Pasaoa
TodosList Component | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import React from 'react';
import { connect } from 'react-redux';

import './TodosList.css';


// MAIN
const TodosList = ({ todos }) => {
  let listTodos = null;
  if (todos.length) {
    listTodos = todos.map(todo => <li key={todo.id}>{todo.text}</li>);
  }
  return (
    <ul>
      {listTodos}
    </ul>
  );
}


export default connect(state => state.todosState)(TodosList);
