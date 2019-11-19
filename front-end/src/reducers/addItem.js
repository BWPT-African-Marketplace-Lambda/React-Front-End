import {
  ADD_ITEMS_START,
  ADD_ITEMS_SUCCESS,
  ADD_ITEMS_ERROR,
} from "../actions/addItem";

const initialState = {
  newItem: {},
  isLLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_ITEMS_SUCCESS:
      return {
        ...state,
        newItem: action.payload,
        isLoading: false
      }
    case ADD_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}