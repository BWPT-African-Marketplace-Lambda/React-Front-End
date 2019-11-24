import  defaultAvatar from "../images/default-avatar.png"


import {
  UPDATE_USER_BIO_START,
  UPDATE_USER_BIO_SUCCESS,
  UPDATE_USER_BIO_ERROR
} from "../actions/updateUserBio"

const initialState = {
  userBio: {
    avatar_url: defaultAvatar,
    about: "Add your about information",
    email: "Update your email",
    username: "Update your username",
    id: 1
  },
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