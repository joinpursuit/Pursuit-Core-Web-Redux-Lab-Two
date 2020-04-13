import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import DisplayTodos from "./DisplayTodos";
import { setVis } from "../actions/visibilityActions";

let idCount = 1;
const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  // const visState = useSelector((state) => state.visibilityFilter);
  // const todo = useSelector((state) => state.todos);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: idCount, text: input, completed: false }));

    idCount += 1;
    setInput("");
  };

  const handleClick = (e) => {
    dispatch(setVis(e.target.id));
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
      <div className="buttonDiv">
        <label>
          Show:
          <button onClick={handleClick} id="ALL" className="butt1">
            <span id="ALL">All</span>
          </button>
          <button onClick={handleClick} id="ACTIVE" className="butt2">
            <span id="ACTIVE">Active</span>
          </button>
          <button onClick={handleClick} id="COMPLETED" className="butt3">
            <span id="COMPLETED">Completed</span>
          </button>
        </label>
      </div>
    </div>
  );
};

export default Todo;
