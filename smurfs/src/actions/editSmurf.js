import axios from 'axios';
import {getData} from '../actions'

export const AXIOS_PUT_DELETE_STARTED = 'AXIOS_POST_STARTED';
export const AXIOS_PUT_DELETE_SUCESS = 'AXIOS_POST_SUCESS';
export const AXIOS_PUT_DELETE_ERROR = 'AXIOS_POST_ERROR';
export const TOGLE_EDIT = 'TOGLE_EDIT';

export const togleEdit = (data) => dispatch => {
    dispatch({ type:TOGLE_EDIT, payload: data})
}

export const editData = (data) => dispatch => {
    dispatch({ type: AXIOS_PUT_DELETE_STARTED });
    axios
    .put(`http://localhost:3333/smurfs/${data.id}`,data)
    .then(res =>{
        dispatch({ type: AXIOS_PUT_DELETE_SUCESS,  payload: res });
        dispatch(getData());
        console.log(res);
    })
    .catch(err => {
        dispatch({ type: AXIOS_PUT_DELETE_ERROR, payload: err })
    });
};