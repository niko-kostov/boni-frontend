import {API_DRIVER, setAuthToken} from "../../config";
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
    setAuthToken();
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
    setAuthToken();
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
    setAuthToken();
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
    setAuthToken();
    return dispatch => {
        API_DRIVER.post("api/item/admin", {
            name: itemName,
            itemImage: itemImage,
            description: itemDescription,
            categoryId: categoryId
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
    setAuthToken();
    return dispatch => {
        API_DRIVER.patch("api/item/admin", {
            id: itemId,
            name: itemName,
            description: itemDescription,
            categoryId: categoryId,
            itemImage: itemImage
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
    setAuthToken();
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

export const addItemPriceInsideItemWithId = (itemPrice, itemSize, itemId, categoryId) => {
    setAuthToken();
    return dispatch => {
        API_DRIVER.post("api/itemPrice/admin",
            {
                itemId: itemId,
                price: itemPrice,
                size: itemSize
            }
        ).then(response => {
            dispatch(
                {
                    type: actionTypes.ADD_ITEM_PRICE_IN_ITEM,
                    itemPrice: response.data,
                    itemId: itemId,
                    categoryId: categoryId
                }
            )
        }).catch(error => {
            dispatch({type: actionTypes.GET_MENU_ERROR})
        });
    }
};

export const deleteItemPriceInsideItemWithId = (itemPriceId, itemId, categoryId) => {
    setAuthToken();
    return dispatch => {
        API_DRIVER.delete("api/itemPrice/admin/" + itemPriceId)
            .then(response => {
                dispatch(
                    {
                        type: actionTypes.DELETE_ITEM_PRICE_IN_ITEM,
                        itemPrice: response.data,
                        itemId: itemId,
                        categoryId: categoryId
                    }
                )
            }).catch(error => {
                dispatch({type: actionTypes.GET_MENU_ERROR})
        });
    }
};
