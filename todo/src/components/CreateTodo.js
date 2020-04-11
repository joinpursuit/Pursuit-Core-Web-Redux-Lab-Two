import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSingleTodo } from "../actions/todoActions";

const CreateTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSingleTodo(input));
    setInput("");
  };

  return (
    <>
      {loading === true ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      ) : (
        <p>ADDING TO LIST ...</p>
      )}
    </>
  );
};

export default CreateTodo;
