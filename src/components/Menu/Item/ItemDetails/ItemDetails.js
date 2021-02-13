import React, {useState} from 'react';
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";
import {Card, Image} from "react-bootstrap";
import ItemPrice from "../ItemPrice/ItemPrice";

const ItemDetails = (props) => {
    let [numberOfItems, setNumberOfItems] = useState(1);

    let increaseNumber = () => {
        if(numberOfItems !== 10){
            setNumberOfItems(numberOfItems + 1);
        }
    }

    let decreaseNumber = () => {
        if(numberOfItems !== 1){
            setNumberOfItems(numberOfItems - 1);
        }
    }

    return(
        <Modal className="modal-dialog-centered"
               isOpen={props.defaultModal}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Item name
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
                <Card.Img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg"/>
                <p>
                    Item details and ingredients.
                </p>
                <ItemPrice/>
            </div>
            <div className="modal-footer d-inline-block">
                    <Button className="btn btn-outline-info">
                        <span className="fa fa-shopping-cart"/>
                        Add to cart
                    </Button>
                    <div className="d-inline-flex float-right">
                        <Button className="btn btn-outline-danger"
                                type="button"
                                style={{margin: 0}}
                                onClick={decreaseNumber}>
                            <span className="fa fa-minus"/>
                        </Button>
                        <Input size={1}
                               id="numberOfItems"
                               value={numberOfItems}
                        />
                        <Button className="btn btn-outline-success"
                                type="button"
                                onClick={increaseNumber}>
                            <span className="fa fa-plus"/>
                        </Button>
                    </div>
            </div>
        </Modal>
    );
}

export default ItemDetails;
