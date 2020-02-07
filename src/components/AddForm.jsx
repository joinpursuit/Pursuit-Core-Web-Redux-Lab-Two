/*
Joseph P. Pasaoa
AddForm Component | Todos a la Redux | React Redux Two Lab
*/


    // external imports
    import React, { useState } from 'react';
    import { connect } from 'react-redux';
    
    // local
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
    } else {
      setErrorMsg("");
      props.addTodo(submission);
    }
    refTodoTxt.current.focus();
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todoTxt} onChange={handleChange} name="todoTxt" placeholder="What needs doing?" ref={refTodoTxt} />
        <button type="submit">Submit</button>
      </form>
      <p className="error-msg">{errorMsg}</p>
    </>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todoTxt)=> {
      dispatch({
        type: ADD_TODO,
        payload: todoTxt
      })
    }
  }
}


export default connect(null, mapDispatchToProps)(AddForm);
