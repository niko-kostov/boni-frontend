import React, {useEffect, useState} from 'react';
import AddressMap from "../../Maps/AddressMap/AddressMap";
import "./AddressCard.css"
import {Button} from "reactstrap";
import * as actions from "../../../store/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


const AddressCard = (props) => {
    const [address, setAddress] = useState({
        name: "",
        number: "",
        municipality: ""
    });

    useEffect(() => {
        if (props.address) {
            setAddress({
                ...address,
                name: props.address.street,
                number: props.address.number,
                municipality: props.address.municipality
            })
        }
    }, [props]);

    const handleSaveAddress = () => {
        props.editAddress(props.address.addressId, props.address.locationDto.locationId, address.name, address.number, address.municipality, props.address.locationDto.locationLatitude, props.address.locationDto.locationLongitude)
    };

    return (
        <React.Fragment>
            <div className="row mb-5">
                <div className="col-md-6 col-sm-12">
                    <AddressMap addressId={props.address.addressId}
                        location={props.address.locationDto}/>
                </div>

                <div className="col-md-6 col-sm-12">
                    <div className="row mb-2">
                        <div className="col-md-7 col-sm-12 addressInput">
                            <input className="form-control"
                                   onChange={(event) => setAddress({...address, name: event.target.value})}
                                   value={address.name} placeholder="Address" type="text"/>
                        </div>

                        <div className="col-md-5 col-sm-12">
                            <input className="form-control"
                                   onChange={(event) => setAddress({...address, number: event.target.value})}
                                   value={address.number} placeholder="Number" type="text"/>
                        </div>
                    </div>

                    <div>
                        <select className="custom-select"
                                onChange={(event) => setAddress({...address, municipality: event.target.value})}
                                value={address.municipality}>
                            <option value="CENTAR">Centar</option>
                            <option value="AERODROM">Aerodrom</option>
                            <option value="BUTEL">Butel</option>
                            <option value="GJORCE_PETROV">Gjorce Petrov</option>
                            <option value="KISELA_VODA">Kisela Voda</option>
                            <option value="CHAIR">Chair</option>
                            <option value="KARPOSH">Karpos</option>
                            <option value="CHENTO">Chento</option>
                        </select>
                    </div>

                    <div>
                        <Button className="buttonFloatBottom"
                            color="primary"
                            type="button"
                            onClick={() => handleSaveAddress(props.address)}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        editAddress: (addressId, locationId, street, number, municipality, lat, lng) =>
            dispatch(actions.editAddressForUser(addressId, locationId, street, number, municipality, lat, lng))
    }
}

export default connect(null, mapDispatchToProps)(AddressCard);
