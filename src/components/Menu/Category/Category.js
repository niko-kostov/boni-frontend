import React, {useState} from "react";
import {Accordion, Card} from "react-bootstrap";
import './Category.css';
import {useAccordionToggle} from "react-bootstrap/AccordionToggle";
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

function CustomToggle({children, eventKey, callback, catName}) {
    const currentEventKey = React.useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey)
    );
    const isCurrentEventKey = currentEventKey === eventKey;
    return (
        <span
            className="p-3 card-container"
            style={{
                borderRadius: "20px",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                color: isCurrentEventKey ? "white" : "white",
                background: isCurrentEventKey ? "linear-gradient(90deg, rgba(89, 89, 89, 0.85), rgba(75,75,75, 0.85) 100%)" : "linear-gradient(90deg, rgb(89, 89, 89), rgba(75,75,75) 100%)"
            }}
            onClick={decoratedOnClick}
        >
            <div className="flex-grow-1">
                <h5 className="category-header">{catName}</h5>
            </div>
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

    return (
        <React.Fragment>
            <Accordion className="container shadow-sm p-0 mb-2 bg-white rounded card-container"
                       key={props.category.id}
                       defaultActiveKey={props.category.id}>
                <Card className="card-container">
                    <CustomToggle
                        eventKey={props.category.id}
                        catName={props.category.name}>
                        <div>
                            {props.role ? props.role[0] === "ROLE_ADMIN" ?
                                <div className="align-items-center">
                                    <Button className="btn btn-neutral shadow-none btn-sm"
                                            onClick={(event) => toggleItemForm(event)}>
                                        <span className="fa fa-plus"/>
                                    </Button>
                                    <ItemForm type={false}
                                              click={(event) => toggleItemForm(event)}
                                              itemFormModal={itemFormModal}/>
                                    <Button className="btn btn-neutral shadow-none btn-sm"
                                            onClick={(event) => toggleCategoryForm(event)}>
                                        <span className="fa fa-edit"/>
                                    </Button>
                                    <CategoryForm type={true}
                                                  click={(event) => toggleCategoryForm(event)}
                                                  editCategoryModal={editCategoryModal}/>
                                    <Button className="btn btn-danger shadow-none btn-sm"
                                            onClick={(event) => toggleCategoryDelete(event)}>
                                        <span className="fa fa-trash"/>
                                    </Button>
                                    <DeleteCategory click={(event) => toggleCategoryDelete(event)}
                                                    deleteCategoryModal={deleteCategoryModal}/>
                                </div> : null : null}
                        </div>
                    </CustomToggle>
                    <Accordion.Collapse eventKey={props.category.id}>
                        <Card.Body className="cards">
                            {props.category.items.map(item => (
                                <Item key={item.id}
                                      role={props.role}
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
