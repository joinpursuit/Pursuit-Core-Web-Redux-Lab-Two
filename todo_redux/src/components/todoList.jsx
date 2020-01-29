
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem';



class List extends React.Component {



    render() {
        console.log("todo list")

        return (
            <ul className='list'>
                {
                    this.props.todoReducer.todos.map(item => {

                        return (
                            <TodoItem todo={item.todo.text} key={item.todo.id} />
                        )
                    })
                }

            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(List)