import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../actions/login";

const initialState = {
  // our "success" state
  user: {},
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
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}