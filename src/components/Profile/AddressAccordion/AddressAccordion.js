import React from 'react';
import AddressCard from "../AddressCard/AddressCard";
import {Accordion, Card} from "react-bootstrap";
import "./AddressAccordion.css"
import AccordionContext from "react-bootstrap/AccordionContext";
import {useAccordionToggle} from "react-bootstrap/AccordionToggle";

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
                        </div>
                    </CustomToggle>
                    <Accordion.Collapse eventKey={props.address.addressId}>
                        <div className="p-2">
                            <AddressCard address={props.address}/>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </React.Fragment>
    )
}

export default AddressAccordion
