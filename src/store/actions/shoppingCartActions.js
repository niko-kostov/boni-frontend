import {API_DRIVER} from "../../config";
import * as actionTypes from '../actionTypes'

export const getShoppingCartHistory = (email) => {
    return dispatch => {
        API_DRIVER.get("api/shoppingCart/user/getOrderHistory/" + email)
            .then(response => {
                dispatch({type: actionTypes.GET_SHOPPING_CART_HISTORY, shoppingCartHistory: response.data});
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_SHOPPING_CART_HISTORY_ERROR})
            });
    }
};

export const addItemToCart = (shoppingCartId, itemId, itemPriceId, quantity) => {
    const itemToCartData = {
        shoppingCartId: shoppingCartId,
        itemId: itemId,
        itemPriceId: itemPriceId,
        quantity: quantity
    };
    return dispatch => {
        API_DRIVER.post("api/shoppingCartItem/user", itemToCartData)
            .then(response => {
                dispatch({type: actionTypes.ADD_ITEM_IN_CART})
            })
            .catch(error => {
                    dispatch({type: actionTypes.ADD_ITEM_IN_CART_ERROR})
                }
            )
    }
};

export const deleteItemFromCart = (shoppingCartId, itemPriceId) => {
    return dispatch => {
        API_DRIVER.delete("api/shoppingCartItem/user/shoppingCart/" + shoppingCartId + "/itemPrice/" + itemPriceId)
            .then(response => {
                dispatch({type: actionTypes.DELETE_ITEM_FROM_CART})
            })
            .catch(error => {
                dispatch({type: actionTypes.DELETE_ITEM_FROM_CART_ERROR})
            })
    }
}

export const changeQuantityForItem = (shoppingCartId, itemPriceId, quantity) => {
    const changeItemQuantityData = {
        shoppingCartId: shoppingCartId,
        itemPriceId: itemPriceId,
        quantity: quantity,
    }
    return dispatch => {
        API_DRIVER.patch("api/shoppingCartItem/user/changeQuantity", changeItemQuantityData)
            .then(response => {
                dispatch({type: actionTypes.CHANGE_ITEM_QUANTITY})
            })
            .catch(error => {
                dispatch({type: actionTypes.CHANGE_ITEM_QUANTITY_ERROR})
            })
    }
}

export const getActiveShoppingCart = (email) => {
    return dispatch => {
        API_DRIVER.get("api/shoppingCart/user/" + email)
            .then(response => {
                dispatch({type: actionTypes.GET_SHOPPING_CART, activeShoppingCart: response.data})
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_SHOPPING_CART_ERROR})
            })
    }
};

export const payShoppingCart = (shoppingCartId) => {
    return dispatch => {
        API_DRIVER.patch("api/shoppingCart/user/pay", {shoppingCartId: shoppingCartId})
            .then(response => {
                let storage = sessionStorage;
                if (localStorage.getItem('token')) {
                    storage = localStorage;
                }
                dispatch({type: actionTypes.PAY_SHOPPING_CART, newActiveShoppingCart: response.data})
                dispatch({type: actionTypes.CHANGE_ACTIVE_SHOPPING_CART, newActiveShoppingCartId: response.data.shoppingCartId})
                storage.setItem('activeShoppingCartId', response.data.shoppingCartId);
            })
            .catch(error => {
                dispatch({type: actionTypes.PAY_SHOPPING_CART_ERROR})
            })
    }
}
