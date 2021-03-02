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

export const addItemInsideCategoryWithId = (itemName, itemDescription, itemImage, categoryId) => {
    return dispatch => {
        API_DRIVER.post("api/item/admin", {
            name: itemName,
            itemImage: itemImage,
            description: itemDescription,
            categoryId: categoryId,
            saveItemPriceDtoSet: []
        })
            .then(response => {
                dispatch(
                    {
                        type: actionTypes.ADD_ITEM_IN_CATEGORY,
                        item: response.data,
                        categoryId: categoryId
                    }
                )
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

export const editItemInsideCategoryWithId = (itemName, itemDescription, itemImage, categoryId, itemId) => {
    return dispatch => {
        API_DRIVER.patch("api/item/admin", {
            id: itemId,
            name: itemName,
            description: itemDescription,
            categoryId: categoryId,
            itemImage: itemImage,
            editItemPriceDtoSet: []
        })
            .then(response => {
                dispatch(
                    {
                        type: actionTypes.EDIT_ITEM_IN_CATEGORY,
                        item: response.data,
                        categoryId: categoryId
                    }
                )
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};

export const deleteItemInsideCategoryWithId = (itemId, categoryId) => {
    debugger;
    return dispatch => {
        API_DRIVER.delete("api/item/admin/" + itemId)
            .then(response => {
                dispatch(
                    {
                        type: actionTypes.DELETE_ITEM_IN_CATEGORY,
                        item: response.data,
                        categoryId: categoryId
                    })
            })
            .catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
            });
    }
};
