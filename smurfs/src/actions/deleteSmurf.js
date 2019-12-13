import axios from 'axios';
import {getData} from '../actions'

export const AXIOS_POST_DELETE_STARTED = 'AXIOS_POST_STARTED';
export const AXIOS_POST_DELETE_SUCESS = 'AXIOS_POST_SUCESS';
export const AXIOS_POST_DELETE_ERROR = 'AXIOS_POST_ERROR';

export const deleteData = (data) => dispatch => {
    dispatch({ type: AXIOS_POST_DELETE_STARTED });
    axios
    .delete(`http://localhost:3333/smurfs/${data}`)
    .then(res =>{
        dispatch({ type: AXIOS_POST_DELETE_SUCESS,  payload: res });
        dispatch(getData());
        console.log(res);
    })
    .catch(err => {
        dispatch({ type: AXIOS_POST_DELETE_ERROR, payload: err })
    });
};