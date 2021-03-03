import React, {useState} from "react";
import {Button, Col} from "reactstrap";
import {Card, Image} from "react-bootstrap";
import ItemForm from "./ItemForm/ItemForm";
import './Item.css';

import ItemDetails from "./ItemDetails/ItemDetails";
import * as actionTypes from "../../../store/actionTypes";
import {useDispatch} from "react-redux";
import DeleteItem from "./DeleteItem/DeleteItem";
import DeleteCategory from "../Category/DeleteCategory/DeleteCategory";

const Item = (props) => {
    let [itemFormModal, setItemFormModal] = useState(false);
    let [itemDeleteModal, setItemDeleteModal] = useState(false);
    let [defaultModal, setDefaultModal] = useState(false);

    let toggleItemForm = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_ITEM, item: props.item});
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category});
        setItemFormModal(!itemFormModal);
    }

    let toggleDeleteItem = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_ITEM, item: props.item});
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category});
        setItemDeleteModal(!itemDeleteModal);
    }

    let toggleModalDetails = (event) => {
        event.stopPropagation();
        dispatch({type: actionTypes.SET_CURRENT_ITEM, item: props.item});
        dispatch({type: actionTypes.SET_CURRENT_CATEGORY, category: props.category});
        setDefaultModal(!defaultModal);
    }

    let showText = (text) => {
        if (text.length < 200) {
            return text.substring(0, text.length);
        } else {
            return text.substring(0, 150).concat("...");
        }
    }

    const dispatch = useDispatch();

    return (
        <div>
            <Card style={{width: '20rem', margin: 5}}
                  id="itemCard"
                  className="d-inline-flex shadow--hover"
            >
                <Image className="card-image"
                       variant="top"
                       src={props.item.itemImage}/>
                <div id="itemButtons">
                    <Button id="editItemButton"
                            onClick={(event) => toggleItemForm(event)}>
                        <span className="fa fa-edit"/>
                    </Button>
                    <ItemForm type={true}
                              click={(event) => toggleItemForm(event)}
                              itemFormModal={itemFormModal}/>
                    <Button className="btn btn-danger" id="deleteItemButton"
                            onClick={(event) => toggleDeleteItem(event)}
                    >
                        <span className="fa fa-trash"/>
                    </Button>
                    <DeleteItem click={(event) => toggleDeleteItem(event)}
                                    itemDeleteModal={itemDeleteModal}/>
                </div>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {showText(props.item.description)}
                    </Card.Text>
                    <Button
                        className="text-default float-right"
                        color="link"
                        onClick={(event) => toggleModalDetails(event)}
                    >
                        Details
                    </Button>
                    <ItemDetails click={(event) => toggleModalDetails(event)}
                                 defaultModal={defaultModal}
                                 item={props.item}
                    />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;
