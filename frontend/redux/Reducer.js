// reducer.js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./Actions";

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state, // Create a copy of the current state
        count: state.count + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state; // Return the current state if the action type doesn't match
  }
}

export default counterReducer;
