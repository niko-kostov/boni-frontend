import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import './ShoppingCart.css';
import {Button, Table} from "reactstrap";

const ShoppingCart = () => {
    let [shoppingCart, setShoppingCart] = useState({
        shoppingCartId: 1,
        shoppingCartItems: [
            {itemId: 5, itemName: "Cheeseburger", itemPriceId: 3, itemPrice: 200, itemPriceSize: "MEDIUM", quantity: 2},
            {itemId: 4, itemName: "Opasen Burger", itemPriceId: 2, itemPrice: 300, itemPriceSize: "LARGE", quantity: 4}
        ]
    })

    /*useEffect(() => {
        if (localStorage.getItem("shoppingCart")){
            setShoppingCart(JSON.parse(localStorage.getItem("shoppingCart")))
        }else{
            setShoppingCart({})
        }
    }, []);*/

    let increaseNumber = (itemId) => {
        let tempShoppingCartItems = [...shoppingCart.shoppingCartItems];
        for (let i = 0; i < tempShoppingCartItems.length; i++){
            if(tempShoppingCartItems[i].itemId === itemId){
                tempShoppingCartItems[i].quantity = tempShoppingCartItems[i].quantity + 1;
                break;
            }
        }
        let tmpShoppingCart = {...shoppingCart}
        tmpShoppingCart.shoppingCartItems = tempShoppingCartItems;
        setShoppingCart(tmpShoppingCart);
    }

    let decreaseNumber = (itemId) => {
        let tempShoppingCartItems = [...shoppingCart.shoppingCartItems];
        for (let i = 0; i < tempShoppingCartItems.length; i++){
            if(tempShoppingCartItems[i].itemId === itemId){
                if(tempShoppingCartItems[i].quantity !== 1){
                    tempShoppingCartItems[i].quantity = tempShoppingCartItems[i].quantity - 1;
                }
                break;
            }
        }
        let tmpShoppingCart = {...shoppingCart}
        tmpShoppingCart.shoppingCartItems = tempShoppingCartItems;
        setShoppingCart(tmpShoppingCart);
    }

    let deleteItem = (itemId) => {
        let tempShoppingCartItems = [...shoppingCart.shoppingCartItems.filter(item => item.itemId !== itemId)];
        let tmpShoppingCart = {...shoppingCart}
        tmpShoppingCart.shoppingCartItems = tempShoppingCartItems;
        setShoppingCart(tmpShoppingCart);
    }

    return (
        <div className="position-relative mb-4">
            {/* Hero for FREE version */}
            <section className="section section-shaped">
                {/* Background circles */}
                <div className="custom-style"/>
            </section>
            <div className="container shadow pb-1">
                <h2>Shopping Cart #{shoppingCart.shoppingCartId}</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {shoppingCart.shoppingCartItems.map(shoppingCartItem => (
                        <tr key={shoppingCartItem.itemId}>
                            <td>{shoppingCartItem.itemId}</td>
                            <td>
                                <span>{shoppingCartItem.quantity}</span>
                                <span> x </span>
                                <span>{shoppingCartItem.itemName} ({shoppingCartItem.itemPriceSize})</span>
                                <div className="float-right">
                                    <Button size="sm"
                                            className="fa fa-minus"
                                            onClick={() => decreaseNumber(shoppingCartItem.itemId)}/>
                                    <Button size="sm"
                                            className="fa fa-plus"
                                            onClick={() => increaseNumber(shoppingCartItem.itemId)}/>
                                    <Button size="sm"
                                            className="fa fa-trash bg-danger text-white"
                                            onClick={() => deleteItem(shoppingCartItem.itemId)}/>
                                </div>
                            </td>
                            <td>{shoppingCartItem.quantity * shoppingCartItem.itemPrice}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2">Total</td>
                        <td colSpan="1">{
                            shoppingCart.shoppingCartItems
                            .map(item => item.itemPrice * item.quantity)
                            .reduce((acc, item) => acc + item, 0)
                        }</td>
                    </tr>
                    </tbody>
                </Table>
                <Button
                    className="btn btn-outline-success middle-screen-cart"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default withRouter(ShoppingCart);
