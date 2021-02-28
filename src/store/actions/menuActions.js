import {API_DRIVER} from "../../config";
import * as actionTypes from '../actionTypes'

const getMenuSuccess = (menu) => {
    return {
        type: actionTypes.GET_MENU_SUCCESS,
        menu: menu
    }
}

export const getMenu = () => {
    return dispatch => {
        API_DRIVER.get("api/menu")
            .then(response => {
                dispatch(getMenuSuccess(response.data));
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

export const createCategory = (categoryName) => {
    return dispatch => {
        API_DRIVER.post("api/category/admin", {name: categoryName})
            .then(response => {
                dispatch({type: actionTypes.CREATE_CATEGORY, category: response.data})
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

export const editCategory = (categoryName, categoryId) => {
    return dispatch => {
        API_DRIVER.patch("api/category/admin", {name: categoryName, id: categoryId})
            .then(response => {
                dispatch({type: actionTypes.EDIT_CATEGORY, category: response.data})
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

export const deleteCategory = (categoryId) => {
    return dispatch => {
        API_DRIVER.delete("api/category/admin/" + categoryId)
            .then(response => {
                dispatch({type: actionTypes.DELETE_CATEGORY, category: response.data})
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

