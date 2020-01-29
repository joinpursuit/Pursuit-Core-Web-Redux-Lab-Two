
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';



const List = (props) => {


    let todosArr = props.todoReducer.todos

    console.log(todosArr)
    return (
        <ul className='list'>
            {
                todosArr && todosArr.length
                    ? todosArr.map(item => {
                        return <TodoItem todo={item.todo.text} key={item.todo.id} className='item' />
                    })
                    : 'Enter Task'
            }

        </ul>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(List)