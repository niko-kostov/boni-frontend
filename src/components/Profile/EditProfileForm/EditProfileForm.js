import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal} from "reactstrap";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";

const EditProfileForm = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        setPhoneNumber(props.phoneNumber);
        setFirstName(props.firstName);
        setLastName(props.lastName);
    }, []);

    const handleSubmitEditProfile = () => {
        props.editProfile(firstName, lastName, phoneNumber);
        props.click();
    }

    const isFormValid = firstName && lastName;

    return(
        <Modal className="modal-dialog-centered"
               isOpen={props.isOpen}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Edit Profile
                </h4>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.click}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                <Form>
                    <FormGroup>
                        <Label for="editFirstName">First Name</Label>
                        <Input
                            id="editFirstName"
                            className="form-control"
                            name="nameInput"
                            placeholder="First Name"
                            value={firstName}
                            invalid={!isFormValid}
                            onChange={(event) => setFirstName(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="editLastName">Last Name</Label>
                        <Input
                            id="editLastName"
                            className="form-control"
                            name="lastNameInput"
                            placeholder="Last Name"
                            value={lastName}
                            invalid={!isFormValid}
                            onChange={(event) => setLastName(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="editPhoneNumber">Phone number</Label>
                        <Input
                            id="editPhoneNumber"
                            className="form-control"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            type="number"
                        />
                    </FormGroup>
                </Form>
            </div>
            <div className="modal-footer d-inline-block">
                <Button
                    color="primary"
                    type="button"
                    onClick={handleSubmitEditProfile}
                    disabled={!isFormValid}
                >
                    Save Changes
                </Button>
                <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.click}
                >
                    Close
                </Button>
            </div>
        </Modal>
    );

}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editProfile: (firstName, lastName, phoneNumber) => dispatch(actions.editProfile(firstName, lastName, phoneNumber)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
