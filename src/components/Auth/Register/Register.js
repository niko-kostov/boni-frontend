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
import {useForm} from "react-hook-form";


const Register = (props) => {
    const {register, watch, errors, handleSubmit} = useForm();

    const handleRegister = (data) => {
        props.register(
            data.emailInput,
            data.firstNameInput,
            data.lastNameInput,
            data.phoneNumberInput,
            data.passwordInput
        );
        props.history.push("/login");
    }

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
                                    {/*<CardHeader className="bg-white pb-5">
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
                                    </CardHeader>*/}
                                    <CardBody className="px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <small>Sign up with credentials</small>
                                        </div>
                                        <Form role="form" onSubmit={handleSubmit(handleRegister)}>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input name="emailInput" placeholder="Email" type="text"
                                                           innerRef={register({
                                                               required: true,
                                                               pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                                           })}/>
                                                </InputGroup>
                                                {
                                                    errors.emailInput &&
                                                    errors.emailInput?.type === "required" &&
                                                    <span
                                                        className="text-danger font-weight-500">Email cannot be empty!</span>
                                                }
                                                {
                                                    errors.emailInput &&
                                                    errors.emailInput?.type === "pattern" &&
                                                    <span
                                                        className="text-danger font-weight-500">Enter valid email!</span>
                                                }
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input name="firstNameInput" placeholder="First Name" type="text"
                                                           innerRef={register({
                                                               required: true
                                                           })}/>
                                                </InputGroup>
                                                {
                                                    errors.firstNameInput &&
                                                    errors.firstNameInput?.type === "required" &&
                                                    <span className="text-danger font-weight-500">First name cannot be empty</span>
                                                }
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input name="lastNameInput" placeholder="Last Name" type="text"
                                                           innerRef={register({
                                                               required: true
                                                           })}/>
                                                </InputGroup>
                                                {
                                                    errors.lastNameInput &&
                                                    errors.lastNameInput?.type === "required" &&
                                                    <span className="text-danger font-weight-500">Last name cannot be empty</span>
                                                }
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative mb-3">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-hat-3"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input name="phoneNumberInput" placeholder="Phone Number"
                                                           type="number"
                                                           innerRef={register({
                                                               required: false,
                                                           })}/>
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
                                                        name="passwordInput"
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        innerRef={register({
                                                            required: true,
                                                            minLength: 7
                                                        })}
                                                    />
                                                </InputGroup>
                                                {
                                                    errors.passwordInput &&
                                                    errors.passwordInput?.type === "required" &&
                                                    <span
                                                        className="text-danger font-weight-500">Please enter password!</span>
                                                }
                                                {
                                                    errors.passwordInput &&
                                                    errors.passwordInput?.type === "minLength" &&
                                                    <span className="text-danger font-weight-500">Password should be at least 7 characters long!</span>
                                                }
                                            </FormGroup>
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="repeatPasswordInput"
                                                        placeholder="Repeat Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        innerRef={register({
                                                            required: true,
                                                            minLength: 7,
                                                            validate: (value) => value === watch("passwordInput")
                                                        })}
                                                    />
                                                </InputGroup>
                                                {
                                                    errors.repeatPasswordInput &&
                                                    errors.repeatPasswordInput?.type === "required" &&
                                                    <span
                                                        className="text-danger font-weight-500">Please enter password!</span>
                                                }
                                                {
                                                    errors.repeatPasswordInput &&
                                                    errors.repeatPasswordInput?.type === "minLength" &&
                                                    <span className="text-danger font-weight-500">Password should be at least 7 characters long!</span>
                                                }
                                                {
                                                    errors.repeatPasswordInput &&
                                                    errors.repeatPasswordInput?.type === "validate" &&
                                                    <span className="text-danger font-weight-500">Passwords do not match!</span>
                                                }
                                            </FormGroup>
                                            <div className="text-center">
                                                <Button
                                                    className="mt-4"
                                                    color="primary"
                                                    type="submit"
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
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (email, firstName, lastName, phoneNumber, password) => dispatch(actions.register(email, firstName, lastName, phoneNumber, password)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
