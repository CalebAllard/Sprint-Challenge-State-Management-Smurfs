import {AXIOS_GET_STARTED,AXIOS_GET_SUCESS,AXIOS_GET_ERROR} from '../actions'

const initialState = {
    smurfs:[],
    getStarted: false,
    error: ''
};

const getReducer = (state = initialState, action) => {

    switch(action.type){
        case AXIOS_GET_STARTED:
            return{
                ...state,
                getStarted: true
            }
        case AXIOS_GET_SUCESS:
            return{
                ...state,
                smurfs: action.payload,
                getStarted: false
            }
        case AXIOS_GET_ERROR:
            return{
                ...state,
                getStarted: false,
                error: action.payload
            }
        
        default:
            return state;
    };


}

export default getReducer;