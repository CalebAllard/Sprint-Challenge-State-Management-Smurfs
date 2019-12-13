import {combineReducers} from 'redux';
import getReducer from './getReducer';
import postReducer from './postReducer';
const reducers = combineReducers({
    smurfs: getReducer,
    post: postReducer
});

export default reducers;