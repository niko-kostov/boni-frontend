import React from 'react';
import {Button, Container, Row, Col, UncontrolledCarousel} from "reactstrap";
import restaurantImage from '../../assets/img/restaurantImage.jpg'
import deliveryImage from '../../assets/img/delivery-service-with-masks-illustration_23-2148501978.jpg'
import orderImage from '../../assets/img/ONLINE FOOD ORDER.jpg'
import {Link, withRouter} from "react-router-dom";
import "./Home.css"
import HomeMap from "../Maps/HomeMap/HomeMap";
import 'leaflet/dist/leaflet.css';

const Home = () => {
    return (
        <div className="position-relative">
            {/* Hero for FREE version */}
            <section className="section section-hero section-shaped">
                {/* Background circles */}
                <img className="shape shape-style-1" src={restaurantImage}/>
                <Container className="shape-container d-flex align-items-center py-lg">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">

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

            <section>
                <div className="container containerToCarousel">
                    <div className="imageCarousel">
                        <UncontrolledCarousel items={[{
                            src: deliveryImage
                        }/*, {
                            src: deliveryImage
                        }, {
                            src: deliveryImage
                        }*/]}/>
                    </div>

                    <div>
                        <div className="textToCarousel">
                            <h2 className="display-3 text-primary">
                                Food at your door!
                            </h2>

                            <h4 className="text-default">
                                Choose your favourite food
                            </h4>

                            <h4 className="text-default">
                                Select where you want it delivered
                            </h4>

                            <h4 className="text-default">
                                Enjoy!
                            </h4>

                            <Link to="/menu">
                                <button className="btn btn-icon btn-primary" type="button">
                                    <span className="btn-inner--icon"><i className="ni ni-bag-17"/></span>
                                    <span className="btn-inner--text">Get Started!</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <HomeMap/>
            </div>

        </div>
    );
}

export default withRouter(Home);
