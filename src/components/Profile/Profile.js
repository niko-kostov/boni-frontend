import React from 'react';
import {withRouter} from "react-router-dom";
import logo from '../../assets/img/boni-logo.png'
import restaurantImage from '../../assets/img/restaurantImage.jpg'


import { Button, Card, Container, Row, Col } from "reactstrap";

const Profile = () => {
    return(
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
                                                className="float-right"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                                size="sm"
                                            >
                                                Cart History
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col className="order-lg-1" lg="4"/>
                                </Row>
                                <div className="text-center mt-7">
                                    <h3>
                                        Jessica Jones
                                    </h3>
                                    <div className="h6 font-weight-300">
                                        jessicajones@gmail.com
                                    </div>
                                    <div>
                                        <h1>ADDRESSES</h1>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Container>
                </section>
            </main>
        </div>

    );
}

export default withRouter(Profile);
