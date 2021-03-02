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
import CategoryForm from "./CategoryForm/CategoryForm";
import {connect, useDispatch} from "react-redux";
import * as actionTypes from '../../../store/actionTypes';
import DeleteCategory from "./DeleteCategory/DeleteCategory";

function CustomToggle({ children, eventKey, callback }) {
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
                backgroundColor: isCurrentEventKey ?  "#d5d8de" : "#e6e9f0",
                color: isCurrentEventKey ? "white" : "white"}}
            onClick={decoratedOnClick}
        >
            {children}
        </span>
    );
}

const Category = (props) => {
    let [itemFormModal, setItemFormModal] = useState(false);
    let [editCategoryModal, setEditCategoryModal] = useState(false);
    let [deleteCategoryModal, setDeleteCategoryModal] = useState(false);

    let toggleItemForm = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category});
        setItemFormModal(!itemFormModal);
    }

    let toggleCategoryForm = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category});
        setEditCategoryModal(!editCategoryModal);
    }

    let toggleCategoryDelete = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category})
        setDeleteCategoryModal(!deleteCategoryModal);
    }

    const dispatch = useDispatch()

    return(
        <React.Fragment>
            <Accordion className="container shadow-sm p-0 mb-2 bg-white rounded"
                       key={props.category.id}
                       defaultActiveKey={props.category.id}>
                <Card>
                    <CustomToggle
                        eventKey={props.category.id}>
                        <div>
                            <div className="float-left">
                                <h5 style={{paddingTop: 5}}>{props.category.name}</h5>
                            </div>
                            <div className="float-right">
                                <Button className="btn btn-info"
                                        onClick={(event) => toggleItemForm(event)}>
                                    <span className="fa fa-plus"/>
                                </Button>
                                <ItemForm type={false}
                                          click={(event) => toggleItemForm(event)}
                                          itemFormModal={itemFormModal}/>
                                <Button className="btn btn-neutral"
                                        onClick={(event) => toggleCategoryForm(event)}>
                                    <span className="fa fa-edit"/>
                                </Button>
                                <CategoryForm type={true}
                                              click={(event) => toggleCategoryForm(event)}
                                              editCategoryModal={editCategoryModal}/>
                                <Button className="btn btn-danger"
                                        onClick={(event) => toggleCategoryDelete(event)}>
                                    <span className="fa fa-trash"/>
                                </Button>
                                <DeleteCategory click={(event) => toggleCategoryDelete(event)}
                                              deleteCategoryModal={deleteCategoryModal}/>
                            </div>
                        </div>
                    </CustomToggle>
                    <Accordion.Collapse eventKey={props.category.id}>
                        <Card.Body className="cards">
                            {props.category.items.map(item => (
                                <Item key={item.id}
                                    item={item}
                                    category={props.category}/>
                            ))}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </React.Fragment>
    );
}
export default Category;
