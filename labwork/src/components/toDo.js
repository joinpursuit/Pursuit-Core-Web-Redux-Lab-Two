import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleToDo } from "../actions/toDoActions";

const ToDo = () => {
  const list = useSelector((state) => state.todos);
  const dispatch = useDispatch();;

  const handleToggle = e => {
    debugger
    e.preventDefault();
    dispatch(toggleToDo(e.target.value, {
            completed: !Boolean
      }))
      console.log(list)
  }

  let eachToDo = list.map((toDo) => <li onClick={handleToggle} key={toDo.id}>{toDo.body}</li>)

  return (
    <div>
      <ul>
        {eachToDo}
      </ul>
    </div>
  );
};

export default ToDo;