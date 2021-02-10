import React, {useState} from "react";
import classnames from "classnames";

// reactstrap components
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col
} from "reactstrap";
import Item from "../Item/Item";
const Category = () => {
    let [plainTabs, setPlainTabs] = useState(1);

    let toggleNavs = (e, state, index) => {
        setPlainTabs(index);
    };

    return(
        <Row className="justify-content-center">
            <Col className="mt-5 mt-lg-0" lg="8">
                {/* Menu */}
                <div className="nav-wrapper">
                    <Nav
                        className="nav-fill flex-column flex-md-row"
                        id="tabs-icons-text"
                        pills
                        role="tablist"
                    >
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 1}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 1
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 1)}
                                href="#pablo"
                                role="tab"
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 2}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 2
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 2)}
                                href="#pablo"
                                role="tab"
                            >
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 3}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 3
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 3)}
                                href="#pablo"
                                role="tab"
                            >
                                Messages
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 4}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 4
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 4)}
                                href="#pablo"
                                role="tab"
                            >
                                Messages
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 5}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 5
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 5)}
                                href="#pablo"
                                role="tab"
                            >
                                Messages
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                aria-selected={plainTabs === 6}
                                className={classnames("mb-sm-3 mb-md-0", {
                                    active: plainTabs === 6
                                })}
                                onClick={e => toggleNavs(e, "plainTabs", 6)}
                                href="#pablo"
                                role="tab"
                            >
                                Messages
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <Item/>
            </Col>
        </Row>
    );
}

export default Category;
