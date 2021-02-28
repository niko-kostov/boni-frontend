import React from 'react';

const ItemPrice = (props) => {
    return(
        <div className="custom-control custom-radio mb-3">
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
    );
}

export default ItemPrice;
