import React, {useEffect, useState} from 'react';
import './ShoppingCartHistory.css';
import {Button, Table} from "reactstrap";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {getDate, getTime} from "../../utils/utils";
import Moment from "react-moment";

const ShoppingCartHistory = (props) => {
    useEffect(() => {
        props.getShoppingCartHistory();
    }, []);

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
                    {props.shoppingCartHistory.map(shoppingCart => (
                        <tr key={shoppingCart.id}>
                            <td>{shoppingCart.id}</td>
                            <td>
                                <Moment format="DD MMM YYYY HH:mm">
                                    {shoppingCart.datePayed}
                                </Moment>
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

const mapStateToProps = (state) => {
    return {
        shoppingCartHistory: state.shoppingCartReducer.shoppingCartHistory,
        error: state.shoppingCartReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShoppingCartHistory: () => dispatch(actions.getShoppingCartHistory("nik"))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHistory));
