import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducer as loginReducer } from "./reducers/login"
import { reducer as signupReducer } from "./reducers/signup"
import { reducer as fetchItemsReducer } from "./reducers/fetchItems"
import { reducer as fetchUserByIdReducer } from "./reducers/userItems"
import { reducer as addItemReducer } from "./reducers/addItem"
import { reducer as updateUserBioReducer } from "./reducers/updateUserBio"
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';

// this combines everything into one giant main reducer,
// so our action types still need to be unique
const rootReducer = combineReducers({
    user: loginReducer,
    newUser: signupReducer,
    fetchItems: fetchItemsReducer,
    userInfo: fetchUserByIdReducer,
    newItem: addItemReducer,
    userBio: updateUserBioReducer
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
