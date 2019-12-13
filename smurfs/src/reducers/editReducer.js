//imports
import {AXIOS_PUT_DELETE_STARTED,
    AXIOS_PUT_DELETE_SUCESS,
    AXIOS_PUT_DELETE_ERROR,
    TOGLE_EDIT } from '../actions'
//initial state
const initialState ={
    editing:false,
    id: 0
}

const editReducer = (state = initialState, action) => {

    switch(action.type){
        case TOGLE_EDIT:
            return {
                ...state,
                editing: !state.editing,
                id: action.payload
            }
        
        
        
        
        default:
            return state;
    }


};
export default editReducer;