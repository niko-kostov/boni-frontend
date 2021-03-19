import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    shoppingCartHistory: [],
    error: false,
    activeShoppingCart: {},
    currentCartId: null,
    currentCartDetails: []
};

const setCurrentCartDetails = (state, action) => {
    return updateObject(state, {currentCartDetails: action.currentCartDetails, currentCartId: action.currentCartId})
}

const getShoppingCartHistory = (state, action) => {
    return updateObject(state, {
        shoppingCartHistory: action.shoppingCartHistory,
        error: false
    });
}

const getShoppingCartHistoryError = (state, action) => {
    return updateObject(state, {error: true});
}

const getShoppingCartHistoryDetails = (state, action) => {
    return updateObject(state, {
        currentCartDetails: action.currentCartDetails,
        error: false
    });
}

const getShoppingCartHistoryDetailsError = (state, action) => {
    return updateObject(state, {error :true});
}

const addItemInCart = (state, action) => {
    return updateObject(state, {error: false});
}

const addItemInCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const deleteItemFromCart = (state, action) => {
    const tempCurrentShoppingCart = {...state.activeShoppingCart};
    const tempShoppingCartItems = tempCurrentShoppingCart.shoppingCartItemDtoList.filter(item => item !== action.shoppingCartItem);
    tempCurrentShoppingCart.shoppingCartItemDtoList = tempShoppingCartItems;
    return updateObject(state, {error: false, activeShoppingCart: tempCurrentShoppingCart});
}

const deleteItemFromCartError = (state, action) => {
    return updateObject(state, {error: true});
}

const increaseItemQuantity = (state, action) => {
    const tempCurrentShoppingCart = {...state.activeShoppingCart};
    const tempShoppingCartItemDtoList = tempCurrentShoppingCart.shoppingCartItemDtoList;
    const tempShoppingCartItem = tempShoppingCartItemDtoList.filter(item => item === action.shoppingCartItem);
    const temp = tempShoppingCartItem[0]
    temp.quantity = temp.quantity + 1;
    tempShoppingCartItem[0] = temp;

    return updateObject(state, {error: false, activeShoppingCart: tempCurrentShoppingCart});
}

const decreaseItemQuantity = (state, action) => {
    const tempCurrentShoppingCart = {...state.activeShoppingCart};
    const tempShoppingCartItemDtoList = tempCurrentShoppingCart.shoppingCartItemDtoList;
    const tempShoppingCartItem = tempShoppingCartItemDtoList.filter(item => item === action.shoppingCartItem);
    const temp = tempShoppingCartItem[0]
    temp.quantity = temp.quantity - 1;
    tempShoppingCartItem[0] = temp;

    return updateObject(state, {error: false, activeShoppingCart: tempCurrentShoppingCart});
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
        case actionTypes.GET_SHOPPING_CART_HISTORY_DETAILS:
            return getShoppingCartHistoryDetails(state, action);
        case actionTypes.GET_SHOPPING_CART_HISTORY_DETAILS_ERROR:
            return getShoppingCartHistoryDetailsError(state, action);
        case actionTypes.ADD_ITEM_IN_CART:
            return addItemInCart(state, action);
        case actionTypes.ADD_ITEM_IN_CART_ERROR:
            return addItemInCartError(state, action);
        case actionTypes.DELETE_ITEM_FROM_CART:
            return deleteItemFromCart(state, action);
        case actionTypes.DELETE_ITEM_FROM_CART_ERROR:
            return deleteItemFromCartError(state, action);
        case actionTypes.INCREASE:
            return increaseItemQuantity(state, action);
        case actionTypes.DECREASE:
            return decreaseItemQuantity(state, action);
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
        case actionTypes.SET_CURRENT_CART_DETAILS:
            return setCurrentCartDetails(state, action);
        default:
            return state;
    }
};

export default shoppingCartReducer;
