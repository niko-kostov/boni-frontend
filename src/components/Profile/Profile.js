import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import logo from '../../assets/img/boni-logo.png'
import restaurantImage from '../../assets/img/restaurantImage.jpg'


import {Button, Card, Container, Row, Col} from "reactstrap";
import AddressAccordion from "./AddressAccordion/AddressAccordion";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import AddressForm from "./AddressForm/AddressForm";

const Profile = (props) => {
    const [openAddressForm, setOpenAddressForm] = useState(false);

    useEffect(() => {
        props.getAddresses("nik");
    }, [])

    return (
        <div>
            <main className="profile-page">
                <section className="section-profile-cover section-shaped my-0">
                    {/* Circles background */}
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>

                <section className="section">
                    <Container>
                        <Card className="card-profile shadow mt--300">
                            <div className="px-4">
                                <Row className="justify-content-center">
                                    <Col className="order-lg-2" lg="3">
                                        <div className="card-profile-image">
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <img
                                                    alt="..."
                                                    className="rounded-circle"
                                                    src={restaurantImage}
                                                    style={{width: 180, height: 180}}
                                                />
                                            </a>
                                        </div>
                                    </Col>
                                    <Col
                                        className="order-lg-3 text-lg-right align-self-lg-center"
                                        lg="4"
                                    >
                                        <div className="card-profile-actions py-4 mt-lg-0">
                                            <Button
                                                className="btn btn-info btn-sm mr-3"
                                                tag={Link}
                                                to={"/shoppingCartHistory"}
                                                size="sm"
                                            >
                                                Edit Profile
                                            </Button>
                                            <Button
                                                className="btn btn-sm btn-default float-right"
                                                tag={Link}
                                                to={"/shoppingCartHistory"}
                                                size="sm"
                                            >
                                                Cart History
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-1" lg="4"/>
                                </Row>

                                <div className="text-center mt-6">
                                    <h3>
                                        Nikola Kostov
                                    </h3>

                                    <h4>
                                        078273764
                                    </h4>

                                    <h6>
                                        niko_kostov@yahoo.com
                                    </h6>
                                </div>

                                <div className="text-center mt-5">
                                    <div className="col-md-12">
                                        {props.addresses.map((item, index) => {
                                            return (
                                                <AddressAccordion key={"address-for-user-" + index}
                                                                  deleteAddress={() => {
                                                                  }}
                                                                  address={item}/>
                                            )
                                        })}
                                    </div>
                                </div>

                                {props.addresses.length < 3 ? <Button
                                    className="btn btn-outline-info container middle-screen-menu"
                                    onClick={(event) => setOpenAddressForm(true)}
                                >
                                    Add Address
                                </Button> : null}

                            </div>
                        </Card>
                    </Container>
                </section>
            </main>

            <AddressForm open={openAddressForm}
                         email={props.email}
                         handleCloseClick={() => setOpenAddressForm(false)}/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        addresses: state.addressReducer.addresses,
        fullname: state.authReducer.fullname,
        email: state.authReducer.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAddresses: (email) => dispatch(actions.getAddressesForUser(email))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
