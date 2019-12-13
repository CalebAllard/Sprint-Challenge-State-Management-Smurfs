import axios from 'axios';

export const AXIOS_GET_STARTED = 'AXIOS_GET_STARTED';
export const AXIOS_GET_SUCESS = 'AXIOS_GET_SUCESS';
export const AXIOS_GET_ERROR = 'AXIOS_GET_ERROR'

export const getData = () => dispatch => {
    dispatch({ type: AXIOS_GET_STARTED });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({ type: AXIOS_GET_SUCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: AXIOS_GET_ERROR, payload: err })
    });
}