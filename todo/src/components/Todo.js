import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";
import DisplayTodos from "./DisplayTodos";
let idCount = 0;
const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: idCount + 1,
        text: input,
        completed: false,
      })
    );

    idCount += 1;
    setInput("");
  };
  console.log(todos);

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
