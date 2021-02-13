import React, {useState} from "react";
import {Button, Col} from "reactstrap";
import {Card} from "react-bootstrap";
import ReadMoreReact from 'read-more-react';
import ItemForm from "./ItemForm/ItemForm";
import ItemDetails from "./ItemDetails/ItemDetails";

const Item = () => {
    let [defaultModal, setDefaultModal] = useState(false);

    let toggleModal = (event) => {
        event.stopPropagation();
        setDefaultModal(!defaultModal);
    }

    const text = "Some quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's content.ome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's contentome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's contentome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's contentome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's contentome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's contentome quick example text to build on the card title and make up the bulk of\n" +
        "                                        the card's content"

    let showText = (text) => {
        if (text.length < 200) {
            return text.substring(0, text.length);
        } else {
            return text.substring(0, 150).concat("...");
        }
    }

    return (
        <div>
            <Card style={{width: '19rem', margin: 5}} className="d-inline-flex shadow--hover">
                <Card.Img variant="top"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {showText(text)}
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
