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
        console.log("rendered", this.props.bool)
        return (
            <li onClick={() => this.props.toggleTodo()}
                className={
                    !this.props.bool ? 'todo-item' : "todo-item-completed"
                }
            >
                {this.props.todo}
            </li >
        )
    }
}

// const mapStateToProps = (state) => {
//     return state
// }

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: data => dispatch(toggleTodo()),

    }
}

export default connect(null, mapDispatchToProps)(TodoItem);