import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearToDo } from "../actions/toDoAction";

const DisplayToDo = () => {
  const listOToDos = useSelector((state) => Object.values(state.toDos));
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;
    dispatch(clearToDo(id));
  };

  let listAll = listOToDos.map((toDo) => {
    return  (
      <li key={toDo.id} id={toDo.id} onClick={(e) => handleClick(e)}>
        {toDo.toDo}
      </li>
    )
  });
  return <ul>{listAll()}</ul>;
};

export default DisplayToDo;
