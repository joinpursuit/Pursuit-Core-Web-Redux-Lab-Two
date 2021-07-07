import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actions/todoAction '

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            text: '',
        }
    }

    newTodo = e => this.setState({ text: e.target.value })

    render() {
        return (
            <form onSubmit={e => {
                e.preventDefault()
                this.props.addTodo(this.state)
            }}>
                <input type="text" onChange={this.newTodo} placeholder='Enter a Todo' />
                <button>Add Todo</button>


            </form>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        todoReducer: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: data => dispatch(addTodo(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

