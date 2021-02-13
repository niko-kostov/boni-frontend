import React from 'react';

const ItemPrice = () => {
    return(
        <div className="custom-control custom-radio mb-3">
            <input
                className="custom-control-input"
                id="customRadio1"
                name="custom-radio-1"
                type="radio"
            />
            <label className="custom-control-label font-weight-600" htmlFor="customRadio1">
                <span>250 ден</span>
            </label>
        </div>
    );
}

export default ItemPrice;
