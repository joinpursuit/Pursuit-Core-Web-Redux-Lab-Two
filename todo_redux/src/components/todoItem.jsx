import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { toggleComplete } from '../store/actions/todoAction ';
import './todoCss.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        console.log('constructor hit');
    }
    componentDidMount() {

        toast.success(`New Todo added: ${this.props.todoReducer.todo.text}`);
    }
    componentWillUnmount() {
        toast.error(`New Todo delete ${this.props.todo}`);
    }

    render() {
        console.log("rendered", this.props)
        return (
            <li className='item' onClick={this.props.toggleComplete}>
                {this.props.todo}
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleComplete: data => dispatch(toggleComplete()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);