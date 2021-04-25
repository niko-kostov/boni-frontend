import React, {useEffect, useRef, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Button, Card, Container, Row, Col, Input} from "reactstrap";
import AddressAccordion from "./AddressAccordion/AddressAccordion";
import * as actions from "../../store/actions";
import {connect} from "react-redux";
import {storage} from "../../firebase";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import {firstName, lastName} from "../../utils/utils";

const Profile = (props) => {
    const inputFile = useRef(null);
    const [imageIsUploading, setImageIsUploading] = useState(false);
    const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);

    useEffect(() => {
        props.getAddresses("nik");
    }, [])

    const changeImage = () => {
        inputFile.current.click();
    }

    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setImageIsUploading(true);
            let uploadTask = storage.ref(`profilePictures/${event.target.files[0].name}`).put(event.target.files[0]);
            uploadTask.on(
                "state_changed",
                snapshot => {

                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("profilePictures")
                        .child(event.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            // console.log(url);
                            props.changeImage(url);
                            setImageIsUploading(false);
                        });
                }
            );
        }
    }

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
                                                    onClick={changeImage}
                                                    src={props.profileImage}
                                                    alt="..."
                                                    className="rounded-circle"
                                                    style={{width: 180, height: 180}}
                                                />
                                            </a>

                                        </div>
                                    </Col>
                                    <input type="file"
                                           id="profileImageInput"
                                           ref={inputFile}
                                           style={{display: "none"}}
                                           onChange={handleImageChange}
                                    />
                                    <Col
                                        className="order-lg-3 text-lg-right align-self-lg-center"
                                        lg="4"
                                    >
                                        <div className="card-profile-actions py-4 mt-lg-0">
                                            <Button
                                                className="btn btn-info btn-sm mr-3"
                                                onClick={() => setOpenEditProfileDialog(true)}
                                                size="sm"
                                            >
                                                Edit Profile
                                            </Button>
                                            {openEditProfileDialog ?
                                                <EditProfileForm
                                                    click={() => setOpenEditProfileDialog(false)}
                                                    isOpen={openEditProfileDialog}
                                                    phoneNumber={props.phoneNumber}
                                                    firstName={firstName(props.fullName)}
                                                    lastName={lastName(props.fullName)}
                                                /> : null}
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
                                        {props.fullName}
                                    </h3>

                                    <h4>
                                        {props.phoneNumber}
                                    </h4>

                                    <h6>
                                        {props.email}
                                    </h6>
                                </div>

                                <div className="text-center mt-5">
                                    <div className="col-md-12">
                                        {props.addresses.map((item, index) => {
                                            return (
                                                <AddressAccordion key={"address-for-user-" + index} address={item}/>
                                            )
                                        })}
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

const mapStateToProps = (state) => {
    return {
        addresses: state.addressReducer.addresses,
        fullName: state.authReducer.fullName,
        email: state.authReducer.email,
        phoneNumber: state.authReducer.phoneNumber,
        profileImage: state.authReducer.profileImage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAddresses: (email) => dispatch(actions.getAddressesForUser(email)),
        changeImage: (imageUrl) => dispatch(actions.changeImage(imageUrl))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
