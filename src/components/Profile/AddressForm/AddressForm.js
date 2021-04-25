import React, {useState} from 'react';
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";
import * as actions from "../../../store/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const AddressForm = (props) => {
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [municipality, setMunicipality] = useState("CENTAR");

    const handleAddAddressClick = () => {
        props.addAddress("nik", 41.99646, 21.43141, municipality, number, street);
        props.handleCloseClick();
        setStreet("");
        setNumber("");
        setMunicipality("");
    }

    return (
        <Modal className="modal-dialog-centered"
               isOpen={props.open}
               toggle={props.handleCloseClick}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Add Address
                </h4>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.handleCloseClick}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>

            <div className="pl-3 pr-3 pb-3 pt-2">
                <FormGroup>
                    <Label for="addressInput">Address</Label>
                    <Input
                        id="addressInput"
                        className="form-control"
                        placeholder="Address"
                        value={street}
                        // invalid={!isFormValid}
                        onChange={(event) => setStreet(event.target.value)}
                        type="text"
                    />
                </FormGroup>
            </div>

            <div className="pl-3 pr-3 pb-3">
                <FormGroup>
                    <Label for="numberInput">Number</Label>
                    <Input
                        id="numberInput"
                        className="form-control"
                        placeholder="Number"
                        value={number}
                        // invalid={!isFormValid}
                        onChange={(event) => setNumber(event.target.value)}
                        type="text"
                    />
                </FormGroup>
            </div>

            <div className="pl-3 pr-3 pb-3">
                <Label for="catNameInput">Municipality</Label>
                <select className="custom-select"
                        onChange={(event) => setMunicipality(event.target.value)}
                        value={municipality}>
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

            <div className="modal-footer d-inline-block">
                <Button
                    color="primary"
                    type="button"
                    // disabled={!isFormValid}
                    onClick={() => handleAddAddressClick()}
                >
                    Add Address
                </Button>
                <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.handleCloseClick}
                >
                    Close
                </Button>
            </div>
        </Modal>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        addAddress: (email, latitude, longitude, municipality, number, street) =>
            dispatch(actions.addNewAddressForUser(email, latitude, longitude, municipality, number, street))
    }
}

export default connect(null, mapDispatchToProps)(AddressForm);
