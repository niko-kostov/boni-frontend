import * as actionTypes from '../actionTypes';
import {API_DRIVER, setAuthToken} from "../../config";

export const getAddressesForUser = (email) => {
    setAuthToken();
    return dispatch => {
        API_DRIVER.get("/api/address/user/" + email)
            .then(res => {
                dispatch({
                    type: actionTypes.GET_ADDRESSES_FOR_USER,
                    addresses: res.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
};

export const addNewAddressForUser = (email, latitude, longitude, municipality, number, street) => {
    setAuthToken();
    const addNewAddressDto = {
        street: street,
        number: number,
        municipality: municipality,
        longitude: longitude,
        latitude: latitude,
        email: email
    }

    return dispatch => {
        API_DRIVER.post("/api/address/user", addNewAddressDto)
            .then(res => {
                dispatch({
                    type: actionTypes.ADD_NEW_ADDRESS_FOR_USER,
                    address: res.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
};

export const deleteAddressForUser = (addressId) => {
    setAuthToken();
    return dispatch => {
        API_DRIVER.delete("/api/address/user/" + addressId)
            .then(res => {
                dispatch({
                    type: actionTypes.DELETE_ADDRESS_FOR_USER,
                    deletedAddress: res.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }
};

export const setSelectedAddress = (address) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_SELECTED_ADDRESS,
            currentAddressSelected: address
        })
    }
}
