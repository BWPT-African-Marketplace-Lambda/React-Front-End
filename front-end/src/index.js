import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as loginReducer } from "./reducers/login"
import { reducer as signupReducer } from "./reducers/signup"
import { reducer as fetchItemsReducer } from "./reducers/fetchItems"
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// this combines everything into one giant main reducer,
// so our action types still need to be unique
const rootReducer = combineReducers({
    user: loginReducer,
    newUser: signupReducer,
    fetchItems: fetchItemsReducer
});

// create our store or "global state object"
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    // gives all children components access to the store
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
