
import React from 'react'
import TodoItem from './todoItem';
import './todo.css'


export const TodoList = (props) => {

    return (
        <ul className='list'
            style={{
                display: 'flex',
                flexDirection: 'column',
                listStyle: 'none',
                textAlign: 'left',
                alignItems: 'center',
            }}
        >
            <TodoItem />
        </ul>
    )
}
