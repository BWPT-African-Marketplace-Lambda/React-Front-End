import  defaultAvatar from "../images/default-avatar.png"

import {
  FETCH_USER_ITEMS_START,
  FETCH_USER_ITEMS_SUCCESS,
  FETCH_USER_ITEMS_ERROR,
} from "../actions/userItems";

const initialState = {
  fetchUserItems: {
    avatar_url: defaultAvatar,
    about: "Add your about information",
    email: "Update your email",
    username: "Update your username"
  },
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_ITEMS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USER_ITEMS_SUCCESS:
      return {
        ...state,
        fetchUserItems: action.payload,
        isLoading: false
      };
    case FETCH_USER_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state
  }
}