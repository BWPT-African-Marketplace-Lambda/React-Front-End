import api from "../utils/api";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


export function login(credentials) {
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
  dispatch({ type: LOGIN_START });

    api()
      .post("/auth/login", credentials)
      .then(res => {
            // enter the "success" state
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user_id", res.data.user.id);
            localStorage.setItem("userName", res.data.user.name);
        
          })
      .catch(err => {
          // enter the "error" state
          dispatch({ type: LOGIN_ERROR, payload: err.error })
      })
    }
}