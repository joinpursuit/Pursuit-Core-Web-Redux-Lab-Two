import React, { useState } from "react";
import { connect } from 'react-redux'
import { ADD_TODO } from '../Store/ActionTypes'
// import { addTodo } from '../Store/Reducers/TodoReducer'


const AddTodo = (props) => {

    const [input, setInput] = useState("");

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
        props.handleAddTodo()

        console.log('works')
    };


    return (
        <div>
            <input
                onChange={e => updateInput(e.target.value)}
                value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
        </button>
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
        handleAddTodo: (nextTodoId, todos) => {
            console.log('Dispatch Stuff', todos)
            dispatch({
                type: ADD_TODO,
                payload: {
                    id: nextTodoId,
                    text: todos,
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