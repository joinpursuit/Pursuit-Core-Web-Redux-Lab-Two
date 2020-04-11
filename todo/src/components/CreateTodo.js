import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSingleTodo } from "../actions/todoActions";

const CreateTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSingleTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default CreateTodo;
