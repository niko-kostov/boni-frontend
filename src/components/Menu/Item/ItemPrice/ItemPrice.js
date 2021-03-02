import React from 'react';
import {Button} from "reactstrap";
import './ItemPrice.css';

const ItemPrice = (props) => {
    return(
        <React.Fragment>
            <div className="custom-control custom-radio mb-3 item-price-root">
                <div style={{width: "auto", display: "inline-flex"}}>
                    <input
                        className="custom-control-input"
                        id={props.itemPrice.id}
                        name="itemPrices"
                        type="radio"
                    />
                    <label className="custom-control-label font-weight-600" htmlFor={props.itemPrice.id}>
                        <span>{props.itemPrice.size} {props.itemPrice.price} ден</span>
                    </label>
                </div>
                <Button size="sm"
                        className="btn btn-danger delete-item-price-button"
                        type="button">
                    <span className="fa fa-trash"/>
                </Button>
            </div>
        </React.Fragment>
    );
}

export default ItemPrice;
