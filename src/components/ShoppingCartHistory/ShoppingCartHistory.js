import React, {useEffect, useState} from 'react';
import './ShoppingCartHistory.css';
import {Button, Table} from "reactstrap";
import {withRouter} from "react-router-dom";
import * as actions from "../../store/actions";
import {connect, useDispatch} from "react-redux";
import {getDate, getTime} from "../../utils/utils";
import Moment from "react-moment";
import DeleteCategory from "../Menu/Category/DeleteCategory/DeleteCategory";
import ShoppingCartDetails from "./ShoppingCartDetails/ShoppingCartDetails";
import * as actionTypes from "../../store/actionTypes";

const ShoppingCartHistory = (props) => {
    let [toggleDetailsModal, setToggleDetailsModal] = useState(false);

    useEffect(() => {
        props.getShoppingCartHistory(props.email);
    }, []);

    const toggleCartDetailsModal = (cartId) => {
        if(!toggleDetailsModal){
            props.geShoppingCartDetails(cartId);
            dispatch({type: actionTypes.SET_CURRENT_CART_DETAILS, currentCartDetails: props.currentCartDetails, currentCartId: cartId});
        }
        setToggleDetailsModal(!toggleDetailsModal);
    }

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <section className="section section-shaped">
                {/* Background circles */}
                <div className="custom-style"/>
            </section>
            <div className="background-image">
                <div className="container shadow pb-1 background-container">
                    <h2>Shopping Cart History</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Date paid</th>
                            <th>Total price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.shoppingCartHistory ? props.shoppingCartHistory.map(shoppingCart => (
                            <tr key={shoppingCart.id}>
                                <td>{shoppingCart.id}</td>
                                <td>
                                    <Moment format="DD MMM YYYY HH:mm">
                                        {shoppingCart.datePayed}
                                    </Moment>
                                    <div className="float-right">
                                        <Button onClick={() => toggleCartDetailsModal(shoppingCart.id)} className="shadow-none border-light">
                                            Details
                                        </Button>
                                        <ShoppingCartDetails click={(event) => toggleCartDetailsModal(event)}
                                                             toggleDetailsModal={toggleDetailsModal}
                                                             shoppingCartDetails={props.currentCartDetails}
                                                             shoppingCartId={props.currentCartId}/>
                                    </div>
                                </td>
                                <td>{shoppingCart.totalPrice}</td>
                            </tr>
                        )) : null}
                        </tbody>
                    </Table>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        shoppingCartHistory: state.shoppingCartReducer.shoppingCartHistory,
        currentCartDetails: state.shoppingCartReducer.currentCartDetails,
        currentCartId: state.shoppingCartReducer.currentCartId,
        error: state.shoppingCartReducer.error,
        email: state.authReducer.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getShoppingCartHistory: (email) => dispatch(actions.getShoppingCartHistory(email)),
        geShoppingCartDetails: (cartId) => dispatch(actions.getShoppingCartHistoryDetails(cartId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHistory));
