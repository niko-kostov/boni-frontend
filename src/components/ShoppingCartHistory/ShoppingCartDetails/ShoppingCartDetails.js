import React, {useEffect} from 'react';
import * as actions from "../../../store/actions";
import {connect} from "react-redux";
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";

const ShoppingCartDetails = (props) => {

    return (
        <React.Fragment>
            <Modal className="modal-dialog-centered"
                   isOpen={props.toggleDetailsModal}
                   toggle={props.click}>
                <div className="modal-header">
                    <h4 className="modal-title" id="modal-title-default">
                        Shopping cart #{props.shoppingCartId}
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
                    {props.shoppingCartDetails ? props.shoppingCartDetails.map((item,index) => (
                        <div key={index}>
                            <p>{item.quantity} x {item.itemName} ({item.size}) - {item.itemPrice} ден</p>
                        </div>
                    )) : null}

                </div>
                <div className="modal-footer d-inline-block">
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
        </React.Fragment>
    );
}

export default ShoppingCartDetails;
