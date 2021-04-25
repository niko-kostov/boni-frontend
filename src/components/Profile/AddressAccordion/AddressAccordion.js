import React, {useState} from 'react';
import AddressCard from "../AddressCard/AddressCard";
import {Accordion, Card} from "react-bootstrap";
import "./AddressAccordion.css"
import AccordionContext from "react-bootstrap/AccordionContext";
import {useAccordionToggle} from "react-bootstrap/AccordionToggle";
import {Button} from "reactstrap";
import ItemForm from "../../Menu/Item/ItemForm/ItemForm";
import CategoryForm from "../../Menu/Category/CategoryForm/CategoryForm";
import DeleteCategory from "../../Menu/Category/DeleteCategory/DeleteCategory";
import DeleteAddressForm from "../DeleteAddressForm/DeleteAddressForm";
import * as actions from "../../../store/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

function CustomToggle({children, eventKey, callback}) {
    const currentEventKey = React.useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <span
            className="p-3"
            style={{
                cursor: "pointer",
                backgroundColor: isCurrentEventKey ? "#d5d8de" : "#e6e9f0",
                color: isCurrentEventKey ? "white" : "white"
            }}
            onClick={decoratedOnClick}
        >
            {children}
        </span>
    );
}

const AddressAccordion = (props) => {
    const [openDeleteAddressForm, setOpenDeleteAddressForm] = useState(false);

    const handleDeleteAddressClick = (event, address) => {
        event.stopPropagation();
        props.setAddress(address);
        setOpenDeleteAddressForm(true);
    }

    return (
        <React.Fragment>
            <Accordion className="container shadow-sm p-0 mb-2 bg-white rounded"
                       key={props.address.addressId}
                       defaultActiveKey={props.address.addressId}>
                <Card>
                    <CustomToggle
                        eventKey={props.address.addressId}>
                        <div>
                            <div className="float-left">
                                <h5 style={{paddingTop: 5}}>{props.address.street}</h5>
                            </div>

                            <div className="float-right">
                                <Button className="btn btn-danger shadow-none"
                                        onClick={(event) => handleDeleteAddressClick(event, props.address)}>
                                    <span className="fa fa-trash"/>
                                </Button>
                            </div>
                        </div>
                    </CustomToggle>
                    <Accordion.Collapse eventKey={props.address.addressId}>
                        <div className="p-2">
                            <AddressCard address={props.address}/>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <DeleteAddressForm open={openDeleteAddressForm}
                               handleClose={setOpenDeleteAddressForm(false)}/>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddress: (address) => dispatch(actions.setSelectedAddress(address))
    }
}

export default connect(null, mapDispatchToProps)(AddressAccordion);
