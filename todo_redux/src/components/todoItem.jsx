import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions/todoAction ';
import './todo.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor hit');
    }
    componentDidMount() {

        toast.success(`New Todo added: ${this.props.todo}`);
    }
    componentWillUnmount() {
        toast.error(`New Todo delete ${this.props.todo}`);
    }

    render() {
        let todosArr = this.props.todoReducer.todos

        return (

            todosArr && todosArr.length
                ? todosArr.map(item => {
                    return (
                        <li onClick={() => this.props.toggleTodo(item.todo.id)}
                            style={{
                                textDecoration: item.todo.completed ? 'line-through' : 'none'
                            }}

                            key={item.todo.id}
                        >
                            {item.todo.text}
                        </li >
                    )
                })
                : 'Enter Task'
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: data => dispatch(toggleTodo(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);