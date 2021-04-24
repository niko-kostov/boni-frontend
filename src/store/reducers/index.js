import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import menuReducer from "./menuReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import addressReducer from "./addressReducer";

export default combineReducers({
    authReducer: authReducer,
    menuReducer: menuReducer,
    shoppingCartReducer: shoppingCartReducer,
    addressReducer: addressReducer
})
