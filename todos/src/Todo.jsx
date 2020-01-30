import React, { useState } from 'react'
import { connect } from 'react-redux'

const Todo = (props) => {
  const [style, setStyle] = useState({textDecoration: 'none'})
  const clickHandler = () => {
    props.toggleTodo(props.id)
    if (style.textDecoration === 'none') {
      setStyle({textDecoration: 'line-through'})
    } else if (style.textDecoration === 'line-through') {
      setStyle({textDecoration: 'none'})
    }
  }

  return (
      <p style={props.todos[props.id -1].style} onClick={clickHandler}>{props.todos[props.id - 1].text}</p>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => {
      dispatch({
        type: 'TOGGLE_TODO',
        payload: id
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Todo)
