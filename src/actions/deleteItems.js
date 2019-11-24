import api from '../utils/api';
import { dispatch } from 'rxjs/internal/observable/pairs';

export const DELETE_ITEMS_START = "DELETE_ITEMS_START";
export const DELETE_ITEMS_SUCCESS = "DELETE_ITEMS_SUCCESS";
export const DELETE_ITEMS_ERROR = "DELETE_ITEMS_ERROR";

export function deleteItems(item, id) {
    return dispatch => {
        dispatch({ type: DELETE_ITEMS_START})

        api()
            .delete(`/items/${id}`, item)
            .then(res => {
                dispatch({ type: DELETE_ITEMS_SUCCESS, payload: res.data})
                console.log(item)
            })
            .catch(err => {
                dispatch({ type: DELETE_ITEMS_ERROR, payload: err.error })
            })
    }
}