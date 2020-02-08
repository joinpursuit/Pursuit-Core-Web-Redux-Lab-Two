/*
Joseph P. Pasaoa
AddForm Component | Todos a la Redux | React Redux Two Lab
*/


// EXTERNALS - LOCALS
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ADD_TODO } from '../redux/actionTypes';
// import './AddForm.css';


const AddForm = (props) => {
  const [ todoTxt, setTodoTxt ] = useState("");
  const [ errorMsg, setErrorMsg ] = useState("");
  const refTodoTxt = React.createRef();


  const handleChange = (e) => setTodoTxt(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = todoTxt;
    if (submission === "" || submission.trim() === "") {
      setErrorMsg("Please enter a valid ToDo and submit again");
      refTodoTxt.current.focus();
    } else {
      props.addTodo(todoTxt);
      setErrorMsg("");
      setTodoTxt("");
      refTodoTxt.current.blur();
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoTxt}
          onChange={handleChange}
          name="todoTxt"
          placeholder="What needs doing?"
          ref={refTodoTxt}
        />
        <button type="submit">Submit</button>
      </form>
      <p className="error-msg">{errorMsg}</p>
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (entry) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          todoTxt: entry
        }
      });
    }
  }
}


export default connect(null, mapDispatchToProps)(AddForm);
