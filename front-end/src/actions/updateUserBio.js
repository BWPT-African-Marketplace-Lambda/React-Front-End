

import api from "../utils/api"

export const UPDATE_USER_BIO_START = "UPDATE_USER_BIO_START"
export const UPDATE_USER_BIO_SUCCESS = "UPDATE_USER_BIO_SUCCESS"
export const UPDATE_USER_BIO_ERROR = "UPDATE_USER_BIO_ERROR"

export function updateUserBio (updatedInfo) {
  return dispatch => {
    dispatch({ type: UPDATE_USER_BIO_START });

    api()
    .put(`/users/${localStorage.getItem("user_id")}`, updatedInfo)
    .then(res => {
      dispatch({ type: UPDATE_USER_BIO_SUCCESS, payload: res.data })
      console.log(res.data)
    })
    .catch(err => {
      dispatch({ type: UPDATE_USER_BIO_ERROR, payload: err })
    })
  }
}