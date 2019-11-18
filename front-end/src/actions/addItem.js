import api from "../utils/api";

export const ADD_ITEMS_START = "ADD_ITEMS_START";
export const ADD_ITEMS_SUCCESS = "ADD_ITEMS_SUCCESS";
export const ADD_ITEMS_ERROR = "ADD_ITEMS_ERROR";

export function addItem(item) {
  return dispatch => {
    dispatch({ type: ADD_ITEMS_START });

    api()
      .post("/items", item)
      .then(res => {
        dispatch({ type: ADD_ITEMS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_ITEMS_ERROR, payload: err.error })
      })
  }
}