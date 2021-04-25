import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    token: null,
    email: null,
    role: null,
    fullName: null,
    phoneNumber: null,
    profileImage: null,
    activeShoppingCartId: null,
    loading: false,
    error: false,
    errorMessage: ""
};

const authStart = (state, action) => {
    return updateObject(state, {error: false, loading: true});
}

const authFail = (state, action) => {
    return updateObject(state, {error: true, loading: false});
}

const authRegister = (state, action) => {
    return updateObject(state, {error: false});
}


const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        email: null,
        role: null,
        fullName: null,
        phoneNumber: null,
        profileImage: null,
        error: false,
        loading: false
    })
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        email: action.email,
        role: action.role,
        fullName: action.fullName,
        profileImage: action.profileImage,
        phoneNumber: action.phoneNumber,
        activeShoppingCartId: action.activeShoppingCartId,
        loading: false,
        error: false
    });
}

const changeActiveShoppingCart = (state, action) => {
    return updateObject(state, {activeShoppingCartId: action.newActiveShoppingCartId})
}

const changeImageForUser = (state, action) => {
    return updateObject(state, {profileImage: action.profileImage})
}

const editProfileForUser = (state, action) => {
    return updateObject(state, {
        fullName: action.fullName,
        phoneNumber: action.phoneNumber,
    })
}


const authReducer = (state = initialState, action) =>{
    switch(action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.AUTH_REGISTER:
            return authRegister(state, action);
        case actionTypes.CHANGE_ACTIVE_SHOPPING_CART:
            return changeActiveShoppingCart(state, action);
        case actionTypes.CHANGE_IMAGE_FOR_USER:
            return changeImageForUser(state, action);
        case actionTypes.EDIT_PROFILE_FOR_USER:
            return editProfileForUser(state, action);
        default: return state;
    }
}

export default authReducer;
