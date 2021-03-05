import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    shoppingCartHistory: [],
    error: false
};

const getShoppingCartHistory = (state, action) => {
    return updateObject(state, {
        shoppingCartHistory: action.shoppingCartHistory,
        error: false
    });
}

const getShoppingCartHistoryError = (state, action) => {
    return updateObject(state, {error: true});
}

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOPPING_CART_HISTORY:
            return getShoppingCartHistory(state, action);
        case actionTypes.GET_SHOPPING_CART_HISTORY_ERROR:
            return getShoppingCartHistoryError(state, action);
        default:
            return state;
    }
};

export default shoppingCartReducer;
