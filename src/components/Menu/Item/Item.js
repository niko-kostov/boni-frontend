import React, {useState} from "react";
import {Button, Col} from "reactstrap";
import {Card, Image} from "react-bootstrap";
import ItemForm from "./ItemForm/ItemForm";
import './Item.css';

import ItemDetails from "./ItemDetails/ItemDetails";

const Item = (props) => {
    let [itemFormModal, setItemFormModal] = useState(false);
    let [defaultModal, setDefaultModal] = useState(false);


    let toggleItemForm = (event) => {
        event.stopPropagation();
        setItemFormModal(!itemFormModal);
    }

    let toggleModal = (event) => {
        event.stopPropagation();
        setDefaultModal(!defaultModal);
    }

    let showText = (text) => {
        if (text.length < 200) {
            return text.substring(0, text.length);
        } else {
            return text.substring(0, 150).concat("...");
        }
    }

    return (
        <div>
                <Card style={{width: '20rem', margin: 5}}
                      id="itemCard"
                      className="d-inline-flex shadow--hover"
                      >
                    <Image className="card-image"
                        variant="top"
                              src={props.item.itemImage}/>
                    <Button id="editItemButton"
                            onClick={(event) => toggleItemForm(event)}>
                        <span className="fa fa-edit"/>
                    </Button>
                    <ItemForm type={true}
                              click={(event) => toggleItemForm(event)}
                              itemFormModal={itemFormModal}/>
                    <Card.Body>
                        <Card.Title>{props.item.itemName}</Card.Title>
                        <Card.Text>
                            {showText(props.item.itemDescription)}
                        </Card.Text>
                        <Button
                            className="text-default float-right"
                            color="link"
                            onClick={(event) => toggleModal(event)}
                        >
                            Details
                        </Button>
                        <ItemDetails click={(event) => toggleModal(event)} defaultModal={defaultModal}/>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default Item;
