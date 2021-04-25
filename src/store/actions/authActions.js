import * as actionTypes from '../actionTypes';
import {API_DRIVER, setAuthToken} from "../../config";

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        errorMessage: error.message
    }
}

const authSuccess = (token, email, fullName, role, phoneNumber, profileImage, activeShoppingCartId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        email: email,
        fullName: fullName,
        role: role,
        phoneNumber: phoneNumber,
        profileImage: profileImage,
        activeShoppingCartId: activeShoppingCartId
    }
}

export const login = (email, password, rememberMe) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        };
        API_DRIVER.post("api/auth/signIn", authData)
            .then(response => {
                const token = response.data.accessToken;
                const fullName = response.data.fullName;
                const role = response.data.roles;
                const activeShoppingCartId = response.data.activeShoppingCartId;
                const phoneNumber = response.data.phoneNumber;
                const profileImage = response.data.profileImage;

                let storage = sessionStorage;
                if (rememberMe) {
                    storage = localStorage;
                }
                storage.setItem('token', token);
                storage.setItem('email', email);
                storage.setItem('role', role);
                storage.setItem('fullName', fullName);
                storage.setItem('activeShoppingCartId', activeShoppingCartId);
                storage.setItem('phoneNumber', phoneNumber);
                storage.setItem('profileImage', profileImage);

                dispatch(authSuccess(token, email, fullName, role, phoneNumber, profileImage, activeShoppingCartId));
            })
            .catch(error => {
                dispatch(authFail(error));
            })
    }
}

export const register = (email, firstName, lastName, phoneNumber, password) => {
    return dispatch => {
        const registerData = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            password: password,
            profileImage: "https://firebasestorage.googleapis.com/v0/b/boni-28f63.appspot.com/o/profilePictures%2Fdefault-avatar.png?alt=media&token=56bcc555-1342-48e7-991d-f4ce5bf708a0"
        };
        API_DRIVER.post("api/auth/register", registerData)
            .then(response => {
                dispatch({type: actionTypes.AUTH_REGISTER})
            })
            .catch(error => {
                dispatch(authFail(error))
            })
    }
}

export const logout = () => {
    let storage = sessionStorage;
    if (localStorage.getItem('token')) {
        storage = localStorage;
    }
    storage.removeItem('token');
    storage.removeItem('email');
    storage.removeItem('role');
    storage.removeItem('fullName');
    storage.removeItem('activeShoppingCartId');
    storage.removeItem('profileImage');
    storage.removeItem('phoneNumber');

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheckState = () => {
    return dispatch => {
        if (!sessionStorage.getItem('token')) {
            if (localStorage.getItem('token')) {
                const token = localStorage.getItem('token');
                const email = localStorage.getItem('email');
                const fullName = localStorage.getItem('fullName');
                const role = localStorage.getItem('role');
                const phoneNumber = localStorage.getItem('phoneNumber')
                const profileImage = localStorage.getItem('profileImage');
                const activeShoppingCartId = localStorage.getItem('activeShoppingCartId');

                dispatch(authSuccess(token, email, fullName, role, phoneNumber, profileImage, activeShoppingCartId));
            }
        } else {
            const token = sessionStorage.getItem('token');
            const email = sessionStorage.getItem('email');
            const fullName = sessionStorage.getItem('fullName');
            const role = sessionStorage.getItem('role');
            const phoneNumber = sessionStorage.getItem('phoneNumber')
            const profileImage = sessionStorage.getItem('profileImage');
            const activeShoppingCartId = sessionStorage.getItem('activeShoppingCartId');

            dispatch(authSuccess(token, email, fullName, role, phoneNumber, profileImage, activeShoppingCartId));
        }
    }
}

export const changeImage = (profileImage) => {
    setAuthToken();
    return dispatch => {
        const changeImageUrlDto = {
            profileImage: profileImage
        };
        API_DRIVER.patch("api/auth/user/changeProfilePicture", changeImageUrlDto)
            .then(response => {
                dispatch({type: actionTypes.CHANGE_IMAGE_FOR_USER, profileImage: profileImage})
            })
    }
}

