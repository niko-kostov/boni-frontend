import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    shoppingCartHistory: [],
    error: false,
    activeShoppingCart: {},
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

const addItemInCart = (state, action) => {
    return updateObject(state, {error: false});
}

const addItemInCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const deleteItemFromCart = (state, action) => {
    return updateObject(state, {error: false});
}

const deleteItemFromCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const changeItemQuantity = (state, action) => {
    return updateObject(state, {error: false});
}

const changeItemQuantityError = (state, action) => {
    return updateObject(state, {error: false});
}

const getActiveShoppingCart = (state, action) => {
    return updateObject(state, {error: false, activeShoppingCart: action.activeShoppingCart})
}

const getActiveShoppingCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const payShoppingCart = (state, action) => {
    return updateObject(state, {error: false, activeShoppingCart: action.newActiveShoppingCart});
}

const payShoppingCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SHOPPING_CART_HISTORY:
            return getShoppingCartHistory(state, action);
        case actionTypes.GET_SHOPPING_CART_HISTORY_ERROR:
            return getShoppingCartHistoryError(state, action);
        case actionTypes.ADD_ITEM_IN_CART:
            return addItemInCart(state, action);
        case actionTypes.ADD_ITEM_IN_CART_ERROR:
            return addItemInCartError(state, action);
        case actionTypes.DELETE_ITEM_FROM_CART:
            return deleteItemFromCart(state, action);
        case actionTypes.DELETE_ITEM_FROM_CART_ERROR:
            return deleteItemFromCartError(state, action);
        case actionTypes.CHANGE_ITEM_QUANTITY:
            return changeItemQuantity(state, action);
        case actionTypes.CHANGE_ITEM_QUANTITY_ERROR:
            return changeItemQuantityError(state, action);
        case actionTypes.GET_SHOPPING_CART:
            return getActiveShoppingCart(state, action);
        case actionTypes.GET_SHOPPING_CART_ERROR:
            return getActiveShoppingCartError(state, action);
        case actionTypes.PAY_SHOPPING_CART:
            return payShoppingCart(state, action);
        case actionTypes.PAY_SHOPPING_CART_ERROR:
            return payShoppingCartError(state, action);
        default:
            return state;
    }
};

export default shoppingCartReducer;
