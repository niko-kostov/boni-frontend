import React, {useEffect, useState} from 'react';
import CustomNav from "../Navbar/CustomNav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Menu from "../Menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Profile from "../Profile/Profile";
import ShoppingCartHistory from "../ShoppingCartHistory/ShoppingCartHistory";
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


const Layout = (props) => {
    useEffect(() => {
        props.onTryAutoSignIn()
    }, []);

    let routes = (
        <Switch>
            <Route exact path="/login" render={() => <Login/>}/>
            <Route exact path="/register" render={() => <Register/>}/>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/menu" render={() => <Menu/>}/>
            <Redirect to="/login"/>
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route exact path="/menu" render={() => <Menu/>}/>
                <Route exact path="/" render={() => <Home/>}/>
                <Route exact path="/shoppingCart" render={() => <ShoppingCart/>}/>
                <Route exact path="/profile" render={() => <Profile/>}/>
                <Route exact path="/shoppingCartHistory" render={() => <ShoppingCartHistory/>} />
                <Redirect to="/"/>
            </Switch>
        )
    }

    return (
        <React.Fragment>
            <CustomNav isAuthenticated={props.isAuthenticated} fullName={props.fullName} profileImage={props.profileImage} logout={props.logoutUser}/>
            {routes}
            <Footer/>
            <ToastContainer autoClose={2000} position={"bottom-center"} hideProgressBar={true} closeButton={null}/>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.token !== null,
        fullName: state.authReducer.fullName,
        profileImage: state.authReducer.profileImage,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignIn: () => dispatch(actions.authCheckState()),
        logoutUser: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
