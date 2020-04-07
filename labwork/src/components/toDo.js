import React from 'react';
import {useSelector} from 'react-redux';

const ToDo = () => {
  const list = useSelector((state) => state.todos)
  let eachToDo = list.map((toDo, index) => <li key={index}>{toDo}</li>)

  return (
    <div>
      <ul>
        {eachToDo}
      </ul>
    </div>
  );
};

export default ToDo;