import React, { useState } from "react";
import { addTodo } from "./TodoAction";
import { useDispatch } from "react-redux";

const CreateItem = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        item,
      })
    );
    setItem('')
  };

  return (
    <form onSubmit={handleChange}>
      <input
        value={item}
        placeholder="enter item"
        onChange={(e) => {
          setItem(e.target.value)
        }}
      />
      <button type="submit" onClick={handleChange}>
        Add Item
      </button>
    </form>
  );
};

export default CreateItem;
