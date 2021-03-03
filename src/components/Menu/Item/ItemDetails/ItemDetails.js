import React, {useEffect, useState} from 'react';
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";
import {Card, Image} from "react-bootstrap";
import ItemPrice from "../ItemPrice/ItemPrice";
import './ItemDetails.css';
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";

const ItemDetails = (props) => {
    let [itemPrice, setItemPrice] = useState(0);
    let [itemSize, setItemSize] = useState("");
    let [numberOfItems, setNumberOfItems] = useState(1);

    useEffect(() => {
        setItemPrice(0);
        setItemSize("");
    }, [props]);

    let increaseNumber = () => {
        if (numberOfItems !== 10) {
            setNumberOfItems(numberOfItems + 1);
        }
    }

    let decreaseNumber = () => {
        if (numberOfItems !== 1) {
            setNumberOfItems(numberOfItems - 1);
        }
    }

    const handleSubmitItemPrice = () => {
        const hasItemPriceWithSize = props.item.itemPrices.find(itemPrice => itemPrice.size === itemSize);
        if(!hasItemPriceWithSize){
            props.addItemPriceInsideItemWithId(itemPrice, itemSize, props.currentItem.id, props.currentCategory.id);
        }else{
            //error notification
        }
    }

    return (
        <Modal className="modal-dialog-centered"
               isOpen={props.defaultModal}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    {props.item.name}
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
                    src={props.item.itemImage}/>
                <p className="pt-3">
                    {props.item.description}
                </p>
                {props.item.itemPrices.sort((p1, p2) => p1.price - p2.price).map(itemPrice => {
                    return <ItemPrice
                        key={itemPrice.id}
                        itemPrice={itemPrice}
                    />
                })}
                <div className="item-price-add-form">
                    <div style={{display: "flex"}}>
                        <Input type={"number"} bsSize={"sm"}
                               className="input-style"
                               placeholder="Item Price"
                               value={itemPrice}
                               onChange={(event) => setItemPrice(event.target.value)}
                               id="numberOfItems"/>
                        <div className="btn-group" style={{margin: "0 5px"}}>
                            <select className="custom-select mr-sm-2"
                                    style={{height: "auto", padding: "0rem 1.75rem 0rem 0.75rem"}}
                                    id="inlineFormCustomSelect"
                                    onChange={(event) => setItemSize(event.target.value)}
                                    value={itemSize}>
                                <option>Size</option>
                                <option value="SMALL">SMALL</option>
                                <option value="MEDIUM">MEDIUM</option>
                                <option value="LARGE">LARGE</option>
                            </select>
                        </div>
                    </div>
                    <Button size="sm"
                            className="btn btn-success add-item-price-button"
                            onClick={handleSubmitItemPrice}
                            type="button">
                        <span className="fa fa-plus"/>
                    </Button>
                </div>
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
                           onChange={(event) => setNumberOfItems(event.target.value)}
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

const mapStateToProps = (state) => {
    return {
        currentCategory: state.menuReducer.currentCategory,
        currentItem: state.menuReducer.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemPriceInsideItemWithId: (itemPrice, itemSize, itemId, categoryId) => dispatch(actions.addItemPriceInsideItemWithId(itemPrice, itemSize, itemId, categoryId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
