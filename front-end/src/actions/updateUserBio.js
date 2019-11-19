import {
  UPDATE_USER_BIO_START,
  UPDATE_USER_BIO_SUCCESS,
  UPDATE_USER_BIO_ERROR
} from "../actions/updateUserBio"

const initialState = {
  userBio: {},
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_BIO_START:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_USER_BIO_SUCCESS:
      return {
        ...state,
        userBio: action.payload,
        isLoading: false
      };
    case UPDATE_USER_BIO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}