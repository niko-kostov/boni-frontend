import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

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
        default:
            return state;
    }
};

export default addressReducer;
