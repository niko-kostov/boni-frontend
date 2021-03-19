import React, {useEffect} from 'react';
import {Button, Container, Row, Col, UncontrolledCarousel} from "reactstrap";
import restaurantImage from '../../assets/img/restaurantImage.jpg'
import deliveryImage from '../../assets/img/delivery_guy.jpg'
import locationImage from '../../assets/img/locationIllustration.jpg'
import orderImage from '../../assets/img/order_food.jpg'
import nikProfileImage from '../../assets/img/nikProfileImage.png'
import boroProfileImage from '../../assets/img/boroProfileImage.png'
import taseProfileImage from '../../assets/img/taseProfileImage.png'
import AOS from "aos";
import "aos/dist/aos.css";


import {Link, withRouter} from "react-router-dom";
import "./Home.css"
import HomeMap from "../Maps/HomeMap/HomeMap";
import 'leaflet/dist/leaflet.css';

const Home = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

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
                    <div className="imageCarousel"
                         data-aos="fade-up-right"
                         data-aos-duration="600"
                         data-aos-delay="250">
                        <UncontrolledCarousel items={[{
                            src: orderImage
                        }, {
                            src: locationImage
                        }, {
                            src: deliveryImage
                        }]}/>
                    </div>

                    <div>
                        <div className="textToCarousel"
                             data-aos="fade-up-left"
                             data-aos-duration="600"
                             data-aos-delay="250">
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

            <section>
                <div className="container mapDiv">
                    <h2 className="display-3 text-primary textAboveMap">
                        Where we make delivery?
                    </h2>
                    <HomeMap/>
                </div>
            </section>

            <section>
                <div className="container meetOurTeamDiv">
                    <h2 className="display-3 text-primary textAboveMap">
                        Meet our team
                    </h2>
                    <div className="teamTwoColumns">
                        <div className="onePersonInTwoColumns"
                             data-aos="fade-left"
                             data-aos-duration="1000"
                             data-aos-delay="600">
                            <div>
                                <img className="rounded-circle profileImageCircle" src={nikProfileImage}/>
                                <h1 className="display-4 text-default textAboveMap">
                                    Nikola Kostov
                                </h1>
                            </div>

                        </div>

                        <div className="onePersonInTwoColumns"
                             data-aos="fade-right"
                             data-aos-duration="1000"
                             data-aos-delay="450">
                            <div>
                                <img className="rounded-circle profileImageCircle" src={taseProfileImage}/>

                                <h1 className="display-4 text-default textAboveMap">
                                    Nikola Tasevski
                                </h1>
                            </div>

                        </div>
                    </div>

                    <div className="teamOneColumn">
                        <div data-aos="fade-down"
                             data-aos-duration="1000"
                             data-aos-delay="450">
                            <img className="rounded-circle profileImageCircle" src={boroProfileImage}/>
                            <h1 className="display-4 text-default textAboveMap">
                                Boris Popovski
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default withRouter(Home);
