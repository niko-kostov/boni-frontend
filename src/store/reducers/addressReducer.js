import * as actionTypes from '../actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    addresses: []
};

const getAddressesForUser = (state, action) => {
    return updateObject(state, {
        addresses: action.addresses
    })
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ADDRESSES_FOR_USER:
            return getAddressesForUser(state, action);
        default:
            return state;
    }
};

export default addressReducer;
