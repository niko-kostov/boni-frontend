import React from 'react';
import {Button} from "reactstrap";
import './ItemPrice.css';
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";

const ItemPrice = (props) => {
    const handleDeleteItemPrice = () => {
        props.deleteItemPriceInsideItemWithId(props.itemPrice.id, props.currentItem.id, props.currentCategory.id);
    }

    return(
        <React.Fragment>
            <div className="custom-control custom-radio mb-3 item-price-root">
                <div style={{width: "auto", display: "inline-flex"}}>
                    <input
                        className="custom-control-input"
                        id={props.itemPrice.id}
                        name="itemPrices"
                        value={props.itemPrice.price}
                        onChange={props.handleChange}
                        type="radio"
                    />
                    <label className="custom-control-label font-weight-600" htmlFor={props.itemPrice.id}>
                        <span>{props.itemPrice.size} {props.itemPrice.price} ден</span>
                    </label>
                </div>
                {props.role ? props.role[0] === "ROLE_ADMIN" ? <Button size="sm"
                                                       className="btn btn-danger delete-item-price-button"
                                                       onClick={handleDeleteItemPrice}
                                                       type="button">
                    <span className="fa fa-trash"/>
                </Button> : null : null}
            </div>
        </React.Fragment>
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
        deleteItemPriceInsideItemWithId: (itemPriceId, itemId, categoryId) => dispatch(actions.deleteItemPriceInsideItemWithId(itemPriceId, itemId, categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPrice);
