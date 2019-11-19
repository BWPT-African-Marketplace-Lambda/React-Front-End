import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "../actions/sighup";

const initialState = {
  // our "success" state
  newUser: {},
  // want to make sure we account for all possible states,
  // including the loading and error states
  isLoading: false,
  error: null
};

// our finite state machine written out in code--
// all the possible states, and actions that can be taken
// which result in a new state.
export function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        newUser: action.payload,
        isLoading: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}