import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CreateTodo = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default CreateTodo;
