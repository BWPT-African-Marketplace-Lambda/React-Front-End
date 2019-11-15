import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
} from "../actions/fetchItems";

const initialState = {
  // our "success" state
  fetchItems: [],
  // want to make sure we account for all possible states,
  // including the loading and error states
  isLoading: false,
  error: null
};

// our finite state machine written out in code--
// all the possible states, and actions that can be taken
// which result in a new state.
export function reducer(state = initialState, action) {
  switch (applicationCache.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetchItems: action.payload,
        isLoading: false
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}