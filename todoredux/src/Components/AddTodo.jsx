import React, { useState } from "react";
import { connect } from 'react-redux'
import { ADD_TODO } from '../Store/ActionTypes'
// import { addTodo } from '../Store/Reducers/TodoReducer'


const AddTodo = (props) => {
    console.log("Starting props", props.todoState.todos)
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);


    const updateInput = (input) => {
        setInput(input)
    };

    // componentDidMount() {
    //     this.getTodos()
    // }

    // const getTodos = () => {
    //     props.handleAddTodo(this.state.input)
    // }

    const handleAddTodo = () => {
        props.handleAddTodo(props.todoState.nextTodoId, input)
        setTodos(props.todoState.todos)

        console.log('works')
    };

    console.log('todos', todos)
    return (
        <div>
            <input
                onChange={e => updateInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
        </button>

            <ul>
                {todos.map(todo => {
                    return (
                        <li value={todo}>
                            {todo}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        todoState: state.todoState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddTodo: (nextTodoId, input) => {
            console.log('Dispatch Stuff', nextTodoId)
            dispatch({
                type: ADD_TODO,
                payload: {
                    id: nextTodoId,
                    text: input,
                    completed: false
                }
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)