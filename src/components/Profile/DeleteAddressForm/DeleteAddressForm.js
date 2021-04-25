import React from 'react';
import {Button, Modal} from "reactstrap";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

const DeleteItem = (props) => {

    const deleteAddress = (addressId) => {
        props.deleteAddress(addressId);
        props.handleClose();
    };

    return (
        <Modal className="modal-dialog-centered"
               isOpen={props.open}
               toggle={props.handleClose}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Delete Item
                </h4>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.handleClose}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                <p>Are you sure you want to delete {props.currentItem.name}?</p>
            </div>
            <div className="modal-footer d-inline-block">
                <Button
                    color="danger"
                    type="button"
                    onClick={() => deleteAddress(props.id)}
                >
                    Delete Address
                </Button>
                <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.handleClose}
                >
                    Close
                </Button>
            </div>
        </Modal>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAddress: (addressId) => dispatch(actions.deleteAddressForUser(addressId))
    }
}

export default connect(null, mapDispatchToProps)(DeleteItem);
