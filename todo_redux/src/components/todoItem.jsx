import React from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux'
import { toggleComplete } from '../store/actions/todoAction ';
import './todoCss.css'

class TodoItem extends React.PureComponent {
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
        console.log("rendered", this.props)
        return (
            <li className='item'>
                {this.props.todo}
            </li>
        )
    }
}

// const mapStateToProps = (state) => {
//     return state
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleComplete: data => dispatch(toggleComplete()),

//     }
// }

export default TodoItem;