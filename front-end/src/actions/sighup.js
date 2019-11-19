import api from "../utils/api"
// import axios from "axios"

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export function signup(credentials) {
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: SIGNUP_START });

    api()
      .post("https://african-marketplace-bw.herokuapp.com/api/auth/register", credentials)
      .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.new_user.id);
      })
      .catch(err =>{
        dispatch({ type: SIGNUP_ERROR, payload: err.error })
      })
  }
}