import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
//reducers
import reducers from './reducers'
//imports from redux and redux react 
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk,logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>  
, document.getElementById("root"));
