import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import './ShoppingCart.css';
import {Button, Table} from "reactstrap";
import * as actions from "../../store/actions";
import {connect} from "react-redux";

const ShoppingCart = (props) => {

    useEffect(() => {
        props.getActiveShoppingCart(props.email);
    }, []);

    const handlePayment = () => {
        props.payShoppingCart(props.shoppingCart.shoppingCartId)
    }

    const handleDeleteItemFromCart = (shoppingCartItem) => {
        props.deleteItemFromCart(props.shoppingCart.shoppingCartId, shoppingCartItem);
    }

    const increaseQuantity = (shoppingCartItem) => {
        props.increaseQuantity(props.shoppingCart.shoppingCartId, shoppingCartItem);
    }

    const decreaseQuantity = (shoppingCartItem, quantity) => {
        if(quantity >= 2){
            props.decreaseQuantity(props.shoppingCart.shoppingCartId, shoppingCartItem);
        }else{
            console.log("Cannot be 0")
        }
    }

    return (
        <div className="position-relative mb-4">
            {/* Hero for FREE version */}
            <section className="section section-shaped">
                {/* Background circles */}
                <div className="custom-style"/>
            </section>
            <div className="container shadow pb-1">
                <h2>Shopping Cart #{props.shoppingCart.shoppingCartId}</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.shoppingCart.shoppingCartItemDtoList ? props.shoppingCart.shoppingCartItemDtoList.map(shoppingCartItem => (
                        <tr key={shoppingCartItem.itemId}>
                            <td>{shoppingCartItem.itemId}</td>
                            <td>
                                <span>{shoppingCartItem.quantity}</span>
                                <span> x </span>
                                <span>{shoppingCartItem.itemName} ({shoppingCartItem.itemPriceSize})</span>
                                <div className="float-right">
                                    <Button size="sm"
                                            className="fa fa-minus"
                                            onClick={() => decreaseQuantity(shoppingCartItem, shoppingCartItem.quantity)}
                                    />
                                    <Button size="sm"
                                            className="fa fa-plus"
                                            onClick={() => increaseQuantity(shoppingCartItem)}
                                    />
                                    <Button size="sm"
                                            className="fa fa-trash bg-danger text-white"
                                            onClick={() => handleDeleteItemFromCart(shoppingCartItem)}
                                    />
                                </div>
                            </td>
                            <td>{shoppingCartItem.quantity * shoppingCartItem.itemPrice}</td>
                        </tr>
                    )) : null}
                    <tr>
                        <td colSpan="2">Total</td>
                        <td colSpan="1">{
                            props.shoppingCart.shoppingCartItemDtoList ? props.shoppingCart.shoppingCartItemDtoList
                                .map(item => item.itemPrice * item.quantity)
                                .reduce((acc, item) => acc + item, 0) : null
                        }</td>
                    </tr>
                    </tbody>
                </Table>
                <Button
                    className="btn btn-outline-success middle-screen-cart"
                    onClick={handlePayment}
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.shoppingCartReducer.activeShoppingCart,
        error: state.shoppingCartReducer.error,
        email: state.authReducer.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActiveShoppingCart: (email) => dispatch(actions.getActiveShoppingCart(email)),
        payShoppingCart: (shoppingCartId) => dispatch(actions.payShoppingCart(shoppingCartId)),
        deleteItemFromCart: (shoppingCartId, shoppingCartItem) => dispatch(actions.deleteItemFromCart(shoppingCartId, shoppingCartItem)),
        increaseQuantity: (shoppingCartId, shoppingCartItem) => dispatch(actions.increaseQuantityForItem(shoppingCartId, shoppingCartItem)),
        decreaseQuantity: (shoppingCartId, shoppingCartItem) => dispatch(actions.decreaseQuantityForItem(shoppingCartId, shoppingCartItem))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCart));
