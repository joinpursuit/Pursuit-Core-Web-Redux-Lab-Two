import React from "react";
import { useSelector } from 'react-redux';
const ToDoComponent = () => {
    // const toDos = useSelector((state) => {
       
    //     return Object.values(state.toDos);
    // })
  return (
    <ul>
      items
      {/* {toDos.map((item) => {
                return <li key={item.id}>{item.name}</li>
            })} */}
    </ul>
  );
};

export default ToDoComponent;
