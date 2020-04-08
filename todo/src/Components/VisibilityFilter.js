import React from 'react';
import { useDispatch } from 'react-redux';
import { setVisibilityFilter } from '../Actions/VisibilityAction';

const VisibilityFilter = () => {
    const dispatch = useDispatch(); 
    return (
      <div>
        <button onClick={() => dispatch(setVisibilityFilter("all"))}>All</button>
        <button onClick={() => dispatch(setVisibilityFilter("active"))}>Active</button>
        <button onClick={() => dispatch(setVisibilityFilter("complete"))}>Complete</button>
      </div>
    );
}

export default VisibilityFilter;