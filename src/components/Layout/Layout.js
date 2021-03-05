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

const Layout = () => {


    let routes = (
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/menu" render={() => <Menu/>}/>
            <Route exact path="/shoppingCart" render={() => <ShoppingCart/>}/>
            <Route exact path="/login" render={() => <Login/>}/>
            <Route exact path="/register" render={() => <Register/>}/>
            <Route exact path="/profile" render={() => <Profile/>}/>
            <Route exact path="/shoppingCartHistory" render={() => <ShoppingCartHistory/>} />
        </Switch>
    );

    return(
        <React.Fragment>
            <CustomNav/>
            {routes}
            <Footer/>
        </React.Fragment>
    );
}

export default withRouter(Layout);
