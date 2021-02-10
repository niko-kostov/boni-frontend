import React from 'react';
import { Button, Container, Row, Col } from "reactstrap";
import logo from '../../assets/img/boni-logo.png';
import restaurantImage from '../../assets/img/restaurantImage.jpg'
import {withRouter} from "react-router-dom";

const Home = () => {
    return(
        <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-hero section-shaped">
                {/* Background circles */}
                <img className="shape shape-style-1" src={restaurantImage}/>
                <Container className="shape-container d-flex align-items-center py-lg">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    src={logo}
                                    style={{ width: "270px" }}
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew zindex-100">
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
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>
            <h3>Adsadadada</h3>

        </div>
    );
}

export default withRouter(Home);
