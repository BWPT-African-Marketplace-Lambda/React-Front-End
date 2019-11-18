import api from "../utils/api"

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";

export function fetchItems () {
// this is our "thunk" function. redux-thunk middleware
// automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_ITEMS_START });

    api()
      .get("/items")
      .then(res => {
        // enter the "success" state
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_ITEMS_ERROR, payload: err.error });
      })
  }
} 