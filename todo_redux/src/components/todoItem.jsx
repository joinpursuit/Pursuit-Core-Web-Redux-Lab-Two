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
        console.log('mounted');

        toast.success(`New Todo added: ${this.props.todo}`);
    }
    componentWillUnmount() {
        toast.error(`New Todo delete ${this.props.todo}`);
    }
    shouldComponentUpdate() {
        return false
    }

    render() {
        console.log("rendered", this.props)
        return (
            <li className='item' >
                <p onClick={(event) => {
                    event.preventDefault()
                    this.props.toggleComplete()
                }} style={{ textDecoration: this.props.toggleCompleted ? "line-through" : null }}> {this.props.todo} </p>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleComplete: data => dispatch(toggleComplete(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);