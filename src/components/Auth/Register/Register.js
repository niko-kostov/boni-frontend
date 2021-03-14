import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import './Register.css';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";


const Register = (props) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleRegister = () => {
        props.register(email, firstName, lastName, phoneNumber, password);
    }

    const isFormValid = email && password && repeatPassword && (repeatPassword === password) && phoneNumber && firstName && lastName;

    return (
        <React.Fragment>
            <main>
                <section className="section section-shaped section-lg">
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
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                            <Col lg="5">
                                <Card className="bg-secondary shadow border-0">
                                    <CardHeader className="bg-white pb-5">
                                        <div className="text-muted text-center mb-3">
                                            <small>Sign up with</small>
                                        </div>
                                        <div className="text-center">
                                            <Button
                                                className="btn-neutral btn-icon mr-4"
                                                color="default"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <span className="btn-inner--icon mr-1 fa fa-facebook-official"/>
                                                <span className="btn-inner--text">Facebook</span>
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Or sign up with credentials</small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Email" type="email"
                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}/>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="First Name" type="text"
                                                           value={firstName}
                                                           onChange={(event) => setFirstName(event.target.value)}/>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Last Name" type="text"
                                                           value={lastName}
                                                           onChange={(event) => setLastName(event.target.value)}/>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Phone Number"
                                                           type="number"
                                                           value={phoneNumber}
                                                           onChange={(event) => setPhoneNumber(event.target.value)}/>
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        value={password}
                                                        onChange={(event) => setPassword(event.target.value)}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Repeat Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        value={repeatPassword}
                                                        onChange={(event) => setRepeatPassword(event.target.value)}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    type="button"
                                                    disabled={!isFormValid}
                                                    onClick={handleRegister}
                                                >
                                                    Create account
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    <Col className="text-right" xs="12">
                                        <Link
                                            className="text-light"
                                            to="/login"
                                        >
                                            <small>Already have an account? Log in</small>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, firstName, lastName, phoneNumber, password) => dispatch(actions.register(email, firstName, lastName, phoneNumber, password)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
