import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";


const initialState = {
    menu: {},
    currentCategory: {},
    currentItem: {},
    error: false
};

const getMenu = (state, action) => {
    return updateObject(state,
        {
            menu: action.menu,
            error: false
        });
}

const getMenuError = (state, action) => {
    return updateObject(state, {error: true});
}

const setCurrentCategory = (state, action) => {
    return updateObject(state, {currentCategory: action.category});
}

const setCurrentItem = (state, action) => {
    return updateObject(state, {currentItem: action.item});
}

const createCategory = (state, action) => {
    const tempMenu = {...state.menu}
    tempMenu.categories.push(action.category)
    return updateObject(state, {menu: tempMenu})
}

const editCategory = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategories = tempMenu.categories.filter(cat => cat.id !== action.category.id)
    tempCategories.push(action.category);
    tempMenu.categories = tempCategories;
    return updateObject(state, {menu: tempMenu})
}

const deleteCategory = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategories = tempMenu.categories.filter(cat => cat.id !== action.category.id)
    tempMenu.categories = tempCategories
    return updateObject(state, {menu: tempMenu})
}

const addItemInsideCategoryWithId = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategory = tempMenu.categories.find(cat => cat.id === action.categoryId)
    tempCategory.items.push(action.item)
    return updateObject(state, {menu: tempMenu})
}

const editItemInsideCategoryWithId = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategory = tempMenu.categories.find(cat => cat.id === action.categoryId)
    const tempItems = tempCategory.items.filter(item => item.id !== action.item.id)
    tempItems.push(action.item);
    tempCategory.items = tempItems;
    return updateObject(state, {menu: tempMenu})
}

const deleteItemInsideCategoryWithId = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategory = tempMenu.categories.find(cat => cat.id === action.categoryId)
    const tempItems = tempCategory.items.filter(item => item.id !== action.item.id)
    tempCategory.items = tempItems
    return updateObject(state, {menu: tempMenu})
}

const addItemPriceInsideItemWithId = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategory = tempMenu.categories.find(cat => cat.id === action.categoryId)
    const tempItem = tempCategory.items.find(item => item.id === action.itemId)
    tempItem.itemPrices.push(action.itemPrice)
    return updateObject(state, {menu: tempMenu})
}

const deleteItemPriceInsideItemWithId = (state, action) => {
    const tempMenu = {...state.menu}
    const tempCategory = tempMenu.categories.find(cat => cat.id === action.categoryId)
    const tempItem = tempCategory.items.find(item => item.id === action.itemId)
    const tempItemPrices = tempItem.itemPrices.filter(itemPrice => itemPrice.id !== action.itemPrice.id)
    tempItem.itemPrices = tempItemPrices
    return updateObject(state, {menu: tempMenu})
}

const menuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_MENU_SUCCESS:
            return getMenu(state, action);
        case actionTypes.GET_MENU_ERROR:
            return getMenuError(state, action);
        case actionTypes.SET_CURRENT_CATEGORY:
            return setCurrentCategory(state, action);
        case actionTypes.CREATE_CATEGORY:
            return createCategory(state, action);
        case actionTypes.EDIT_CATEGORY:
            return editCategory(state, action);
        case actionTypes.DELETE_CATEGORY:
            return deleteCategory(state, action);
        case actionTypes.SET_CURRENT_ITEM:
            return setCurrentItem(state, action);
        case actionTypes.ADD_ITEM_IN_CATEGORY:
            return addItemInsideCategoryWithId(state, action);
        case actionTypes.EDIT_ITEM_IN_CATEGORY:
            return editItemInsideCategoryWithId(state, action);
        case actionTypes.DELETE_ITEM_IN_CATEGORY:
            return deleteItemInsideCategoryWithId(state, action);
        case actionTypes.ADD_ITEM_PRICE_IN_ITEM:
            return addItemPriceInsideItemWithId(state, action);
        case actionTypes.DELETE_ITEM_PRICE_IN_ITEM:
            return deleteItemPriceInsideItemWithId(state, action);
        default: return state;
    }
};

export default menuReducer;
