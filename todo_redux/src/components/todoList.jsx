
import React, { memo } from 'react';
import TodoItem from './todoItem';
import './todo.css'


export const TodoList = (props) => {

    return (
        <ul className='list'>
            <TodoItem />
        </ul>
    )
}
