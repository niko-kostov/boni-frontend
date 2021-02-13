import React, {useState} from "react";
import {Accordion, Card} from "react-bootstrap";
import './Category.css';
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

// reactstrap components
import {
    Button
} from "reactstrap";
import Item from "../Item/Item";
import ItemForm from "../Item/ItemForm/ItemForm";

function CustomToggle({ children, eventKey, callback }) {
    const currentEventKey = React.useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <Button
            type="button"
            style={{
                backgroundColor: isCurrentEventKey ?  "#d5d8de" : "#e6e9f0",
                color: isCurrentEventKey ? "white" : "white"}}
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}

const Category = () => {
    let [defaultModal, setDefaultModal] = useState(false);

    let toggleModal = (event) => {
        event.stopPropagation();
        setDefaultModal(!defaultModal);
    }

    const categories = [
        { id: 1, categoryName: "Burgers"},
        { id: 2, categoryName: "Pizza"},
        { id: 3, categoryName: "Drinks"}
    ];

    return(
        <>
            {categories.map(category => (
            <Accordion className="container shadow-sm p-0 mb-2 bg-white rounded"
                       key={category.id}
                       defaultActiveKey={category.id}>
                <Card>
                    <CustomToggle
                        eventKey={category.id}>
                        <div>
                            <div className="float-left">
                                <h5 style={{paddingTop: 5}}>{category.categoryName}</h5>
                            </div>
                            <div className="float-right">
                                <Button className="btn btn-info"
                                        onClick={(event) => toggleModal(event)}>
                                    <span className="fa fa-plus"/>
                                </Button>
                                <ItemForm click={(event) => toggleModal(event)} defaultModal={defaultModal}/>
                                <Button className="btn btn-neutral"
                                        onClick={(event) => toggleModal(event)}>
                                    <span className="fa fa-edit"/>
                                </Button>
                                <ItemForm click={(event) => toggleModal(event)} defaultModal={defaultModal}/>
                                <Button className="btn btn-danger">
                                    <span className="ni ni-fat-delete"/>
                                </Button>
                            </div>
                        </div>
                    </CustomToggle>
                    <Accordion.Collapse eventKey={category.id}>
                        <Card.Body>
                            <Item />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            ))}
        </>

    );
}

export default Category;
