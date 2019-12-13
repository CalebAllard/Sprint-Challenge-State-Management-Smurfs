import axios from 'axios';
import {getData} from '../actions'

export const AXIOS_POST_STARTED = 'AXIOS_POST_STARTED';
export const AXIOS_POST_SUCESS = 'AXIOS_POST_SUCESS';
export const AXIOS_POST_ERROR = 'AXIOS_POST_ERROR';

export const postData = (data) => dispatch => {
    dispatch({ type: AXIOS_POST_STARTED });
    axios
    .post('http://localhost:3333/smurfs', data)
    .then(res =>{
        dispatch({ type: AXIOS_POST_SUCESS,  payload: res });
        dispatch(getData());
        console.log(res);
    })
    .catch(err => {
        dispatch({ type: AXIOS_POST_ERROR, payload: err })
    });
};