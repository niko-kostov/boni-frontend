import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";
import {act} from "@testing-library/react";

const initialState = {
    addresses: [],
    currentAddressSelected: {}
};

const getAddressesForUser = (state, action) => {
    return updateObject(state, {
        addresses: action.addresses
    })
}

const addAddressForUser = (state, action) => {
    const newAddresses = [...state.addresses, action.address];
    return updateObject(state, {
        addresses: newAddresses
    });
}

const removeAddressForUser = (state, action) => {
    const newAddresses = state.addresses.filter(item => item.addressId !== action.deletedAddress.id)
    return updateObject(state, {
        addresses: newAddresses
    })
}

const setSelectedAddress = (state, action) => {
    return updateObject(state, {
        currentAddressSelected: action.currentAddressSelected
    })
}

const editAddressForUser = (state, action) => {
    let newAddresses = [...state.addresses.filter(address => address.addressId !== action.editedAddress.addressId), action.editedAddress];
    return updateObject(state, {
        addresses: newAddresses
    })
}

const updateCoordinates = (state, action) => {
    let index = state.addresses.findIndex(add => add.addressId === action.addressId);
    const tmpObject = {...state.addresses[index].locationDto, locationLongitude: action.location.longitude, locationLatitude: action.location.latitude};
    const tmpAddress = {...state.addresses[index], locationDto: tmpObject};
    const tmpArrayAddresses = [...state.addresses];
    tmpArrayAddresses[index] = tmpAddress;

    return updateObject(state, {
        addresses: tmpArrayAddresses
    })
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESSES_FOR_USER:
            return getAddressesForUser(state, action);
        case actionTypes.ADD_NEW_ADDRESS_FOR_USER:
            return addAddressForUser(state, action);
        case actionTypes.DELETE_ADDRESS_FOR_USER:
            return removeAddressForUser(state, action);
        case actionTypes.SET_SELECTED_ADDRESS:
            return setSelectedAddress(state, action);
        case actionTypes.EDIT_ADDRESS_FOR_USER:
            return editAddressForUser(state, action);
        case actionTypes.UPDATE_COORDINATES:
            return updateCoordinates(state, action);
        default:
            return state;
    }
};

export default addressReducer;
