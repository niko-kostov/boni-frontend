import React, {useReducer, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Headroom from "headroom.js";
import './CustomNav.css';

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


const CustomNav = () => {
    useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        headroom.init();
    }, []);

    return(
        <Navbar className="navbar-dark bg-info navbar-transparent navbar-light headroom"
                expand="lg"
                id="navbar-main">
            <Container>
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Default Color
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
                                    <img
                                        alt="..."
                                        src=""
                                    />
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
                        <NavItem>
                            <NavLink
                                tag={Link}
                                className="nav-link-icon"
                                to="/shoppingCart"
                            >
                                <i className="ni ni-cart center d-none d-lg-inline-block" />
                                <p className="m-0">Cart</p>
                                <span className="nav-link-inner--text d-lg-none"/>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                tag={Link}
                                className="nav-link-icon"
                                to=""
                            >
                                <i className="ni ni-single-02 center d-none d-lg-inline-block" />
                                <p className="m-0">Login/Register</p>
                                <span className="nav-link-inner--text d-lg-none"/>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </UncontrolledCollapse>
            </Container>
        </Navbar>
    );
}

export default CustomNav;