import React from 'react';
import CustomNav from "../Navbar/CustomNav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Menu from "../Menu/Menu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Layout = () => {
    let routes = (
        <Switch>
            <Route exact path="/" render={() => <Home/>}/>
            <Route exact path="/menu" render={() => <Menu/>}/>
            <Route exact path="/shoppingCart" render={() => <ShoppingCart/>}/>
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
