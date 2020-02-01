import React,{Component} from 'react'
import AddTodos from '../store/reducers/todosReducer'
import { connect } from 'react-redux'


class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            input : ''
        }
    }
    

    updateInputValue = (e) => {
        console.log(e.target.value)
        
    }
    handleTodos = () => {
        this.props.addTodo(this.state.input)
        console.log(this.state.input)
        this.setState({
            input: ''
        })
    }

    render(){
        return (
            <div>
                <input 
                onChange={this.updateInputValue}
                value={this.state.input}
                /> 
                <button onClick={this.handleTodos}>Add Todo</button>
            </div>
            
        )
    }
    
}
// const mapStateToProps = (state, ownProps) => ({

// })

// const mapDispatchToProps = {

// }

// connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AddTodo)

export default connect(
    null,
    {AddTodo}
)(AddTodos)