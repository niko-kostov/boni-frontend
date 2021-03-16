import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
    authReducer: authReducer,
    menuReducer: menuReducer,
    shoppingCartReducer: shoppingCartReducer
})
