import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import DisplayTodos from "./DisplayTodos";

let idCount = 1;
const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: idCount,
        text: input,
        completed: false,
      })
    );

    idCount += 1;
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="title">MY To-Do List</h1>
        <input
          className="inny"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="What do you want todo?"
          value={input}
        ></input>
        <input className="butt" type="submit" value="Add Todo"></input>
      </form>
      <DisplayTodos />
    </div>
  );
};

export default Todo;
