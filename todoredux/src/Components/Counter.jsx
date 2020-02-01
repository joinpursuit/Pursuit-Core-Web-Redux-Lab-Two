import React from 'react';
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT, EVENINCREMENT, ODDINCREMENT, ASYNCINCREMENT } from '../Store/ActionTypes';

const Counter = (props) => {

  const handleIncrement = (e) => {
    props.increment()
  }

  const handleDecrement = (e) => {
    props.decrement()
  }

  const handleEvenIncrement = (e) => {
    props.evenIncrement()
  }

  const handleOddIncrement = (e) => {
    props.oddIncrement()
  }

  const handleAsyncIncrement = (e) => {
    props.asyncIncrement()
  }

  return (
    <div>
      <p>{props.counterState.counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleEvenIncrement}>Even +</button>
      <button onClick={handleOddIncrement}>Odd +</button>
      <button onClick={handleAsyncIncrement}>Async +</button>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counterState: state.counterState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      console.log('increment called')
      dispatch({
        type: INCREMENT
      })
    },
    decrement: () => {
      console.log('decrement called')
      dispatch({
        type: DECREMENT
      })
    },
    evenIncrement: () => {
      console.log('Even increment called')
      dispatch({
        type: EVENINCREMENT
      })
    },
    oddIncrement: () => {
      console.log('Odd increment called')
      dispatch({
        type: ODDINCREMENT
      })
    },
    asyncIncrement: () => {
      console.log('Async increment called')
      setTimeout(() => {
        dispatch({ type: ASYNCINCREMENT })
      }, 1000)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

// export default Counter