/*
Joseph P. Pasaoa
TodoCard Component | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import React from 'react';
import { connect } from 'react-redux';
import { TOGGLE_COMPLETED } from '../redux/actionTypes';


// MAIN
const TodoCard = ({ id, text, completed, dispatch }) => {
  const styleCrossed = {textDecoration: completed ? "line-through" : "none"};
  return (
    <li
      style={styleCrossed}
      onClick={() => dispatch({ type: TOGGLE_COMPLETED, payload: { todoId: id } })}
    >
      ▹ {text}
    </li>
  );
}


// CONNECT
const mapStateToProps = (state, ownProps) => {
  return ({
    completed: state.todosState.todos[ownProps.id].completed
  });
}

export default connect(mapStateToProps)(TodoCard);
