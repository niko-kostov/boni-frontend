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
}
