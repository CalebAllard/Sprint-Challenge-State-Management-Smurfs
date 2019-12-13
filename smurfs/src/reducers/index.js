import {combineReducers} from 'redux';
import getReducer from './getReducer';
import postReducer from './postReducer';
import editReducer from './editReducer';
const reducers = combineReducers({
    smurfs: getReducer,
    post: postReducer,
    edit: editReducer
});

export default reducers;