import {AXIOS_POST_STARTED,AXIOS_POST_SUCESS,AXIOS_POST_ERROR} from '../actions'

const initialState = {
    postStarted: false,
    error: ''
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case AXIOS_POST_STARTED:
            return {
                ...state,
                postStarted: true
            };
        case AXIOS_POST_SUCESS:
            return {
                ...state,
                postStarted: false
            };
        case AXIOS_POST_ERROR:
            return{
                ...state,
                postStarted: false,
                error: action.payload
            };
        default:
            return state;
    }
};
export default postReducer;