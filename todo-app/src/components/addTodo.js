import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../actions/todoActions";

const AddTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a todo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
