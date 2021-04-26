import React, {useReducer, useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Headroom from "headroom.js";
import './CustomNav.css';
import boni_logo_purple from '../../assets/img/boni-new-logo-purple.svg';
import boni_logo from '../../assets/img/boni-new-logo.svg';


import {
    UncontrolledCollapse,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";
import {Image} from "react-bootstrap";
import * as actions from "../../store/actions";
import {connect} from "react-redux";


const CustomNav = (props) => {
    useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }, []);


    return(
        <Navbar className="navbar-dark bg-info navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main">
            <Container>
                <NavbarBrand href="/">
                    <Image id="brandImage" src={boni_logo} style={{ width: "80px", height: "80px" }}/>
                </NavbarBrand>
                <button className="navbar-toggler" id="navbar-default">
                    <span className="navbar-toggler-icon" />
                </button>
                <UncontrolledCollapse
                    navbar
                    toggler="#navbar-default">
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <Link to="/">
                                    <Image src={boni_logo_purple} style={{ width: "50px", height: "50px" }}/>
                                </Link>
                            </Col>
                            <Col className="collapse-close" xs="6">
                                <button className="navbar-toggler" id="navbar-default">
                                    <span />
                                    <span />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                className="nav-link-icon"
                                to="/"
                            >
                                <i className="ni ni-shop center d-none d-lg-inline-block" />
                                <p className="m-0">Home</p>
                                <span className="nav-link-inner--text d-lg-none"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                className="nav-link-icon"
                                to="/menu"
                            >
                                <i className="ni ni-books center d-none d-lg-inline-block" />
                                <p className="m-0">Menu</p>
                                <span className="nav-link-inner--text d-lg-none"/>
                            </NavLink>
                        </NavItem>
                        {props.isAuthenticated ?  <NavItem>
                            <NavLink
                                tag={Link}
                                className="nav-link-icon"
                                to="/shoppingCart"
                            >
                                <i className="ni ni-cart center d-none d-lg-inline-block" />
                                <p className="m-0">Cart</p>
                                <span className="nav-link-inner--text d-lg-none"/>
                            </NavLink>
                        </NavItem> : null}
                        {props.isAuthenticated ?
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav style={{padding: 8}}>
                                    <img src={props.profileImage} style={{width: 60, height: 60, padding: 0}} className="rounded-circle"/>
                                    <span className="nav-link-inner--text d-lg-none">{props.fullName}</span>
                                </DropdownToggle>
                                <DropdownMenu
                                    aria-labelledby="nav-inner-primary_dropdown_1"
                                    right
                                >
                                    <DropdownItem
                                        tag={Link}
                                        to="/profile"
                                    >
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/shoppingCartHistory">
                                        Cart history
                                    </DropdownItem>
                                    <div className="dropdown-divider"/>
                                    <DropdownItem onClick={props.logout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> :
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    className="nav-link-icon"
                                    to="/login"
                                >
                                    <i className="ni ni-single-02 center d-none d-lg-inline-block" />
                                    <p className="m-0">Login/Register</p>
                                    <span className="nav-link-inner--text d-lg-none"/>
                                </NavLink>
                            </NavItem>
                        }
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    );
}


export default withRouter(CustomNav);
