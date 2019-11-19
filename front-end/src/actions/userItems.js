import api from "../utils/api"

export const FETCH_USER_ITEMS_START = "FETCH_USER_ITEMS_START";
export const FETCH_USER_ITEMS_SUCCESS = "FETCH_USER_ITEMS_SUCCESS";
export const FETCH_USER_ITEMS_ERROR = "FETCH_USER_ITEMS_ERROR";

export function fetchUserInfo() {
  return dispatch => {
    dispatch({ type: FETCH_USER_ITEMS_START });

    api()
      .get(`/users/${localStorage.getItem("user_id")}`)
      .then(res => {
        dispatch({ type: FETCH_USER_ITEMS_SUCCESS, payload: res.data.user });
      })
      .catch(err => {
        dispatch({ type: FETCH_USER_ITEMS_ERROR, payload: err.error })
      })
  }
}