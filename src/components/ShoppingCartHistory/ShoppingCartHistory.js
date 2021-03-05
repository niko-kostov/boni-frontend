import React, {useState} from 'react';
import './ShoppingCartHistory.css';
import {Button, Table} from "reactstrap";
import {withRouter} from "react-router-dom";

const ShoppingCartHistory = () => {
    let [shoppingCartHistory, setShoppingCartHistory] = useState({
        shoppingCarts: [
            {shoppingCartId: 1, datePayed: "asd", totalPrice: 1000},
            {shoppingCartId: 2, datePayed: "asd", totalPrice: 2000},
            {shoppingCartId: 3, datePayed: "asd", totalPrice: 3000},
            {shoppingCartId: 4, datePayed: "asd", totalPrice: 4000},
            {shoppingCartId: 5, datePayed: "asd", totalPrice: 5000},
        ]
    })

    return (
        <React.Fragment>
            <section className="section section-shaped">
                {/* Background circles */}
                <div className="custom-style"/>
            </section>
            <div className="container shadow pb-1">
                <h2>Shopping Cart History</h2>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date paid</th>
                        <th>Total price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {shoppingCartHistory.shoppingCarts.map(shoppingCart => (
                        <tr key={shoppingCart.shoppingCartId}>
                            <td>{shoppingCart.shoppingCartId}</td>
                            <td>
                                <span>{shoppingCart.datePayed}</span>
                                <div className="float-right">
                                    <Button onClick={e => e.preventDefault()}>
                                        Details
                                    </Button>
                                </div>
                            </td>
                            <td>{shoppingCart.totalPrice}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
}

export default withRouter(ShoppingCartHistory);
