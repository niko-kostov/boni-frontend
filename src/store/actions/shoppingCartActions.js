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
}
