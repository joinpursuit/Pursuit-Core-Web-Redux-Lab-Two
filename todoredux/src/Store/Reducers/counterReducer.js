import { INCREMENT, DECREMENT, EVENINCREMENT, ODDINCREMENT, ASYNCINCREMENT } from "../ActionTypes"
const initialState = {
  counter: 100
}

const counterReducer = (state = initialState, action) => {
  console.log('counterReducer running ', action);

  const stateCopy = { ...state } // Making a copy current state

  switch (action.type) {
    // cases and default
    case INCREMENT:
      stateCopy.counter = stateCopy.counter + 1
      break;

    case DECREMENT:
      stateCopy.counter--;
      break;

    case EVENINCREMENT:
      if (stateCopy.counter % 2 === 0) {
        stateCopy.counter++;
        break;
      } else {
        break;
      }

    case ODDINCREMENT:
      if (stateCopy.counter % 2 === 0) {
        break;
      } else {
        stateCopy.counter++;
        break;
      }

    case ASYNCINCREMENT:
        stateCopy.counter++;
      break;

    default:
      break;
  }

  return stateCopy
}

export default counterReducer;