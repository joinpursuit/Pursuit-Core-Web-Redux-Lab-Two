import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { addToDo } from "../Actions/actions";
import {createTodo} from "../Actions/actions"
import TodoList from "./TodoList";

const ToDo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const toDo = useSelector(state => state.todo);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addToDo({ id: 1, text: input, completed: false }));
    setInput("");
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  console.log(toDo);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add to-do"
          value={input}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDo;
