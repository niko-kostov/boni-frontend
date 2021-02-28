import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";
import applicationReducer from "./reducers/menuReducer";
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
