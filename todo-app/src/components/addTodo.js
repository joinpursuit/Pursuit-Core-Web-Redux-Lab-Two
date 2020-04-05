import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
const addTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFruit(input))
}
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input placeholder='todo'
          text='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  )

}

