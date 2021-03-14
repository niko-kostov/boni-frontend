import React, {useState} from 'react';
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
import {Link, withRouter} from "react-router-dom";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (event) => {
        props.login(email, password, rememberMe);
    }

    const isFormValid = email && password;

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
                                            <small>Sign in with</small>
                                        </div>
                                        <div className="btn-wrapper text-center">
                                            <Button
                                                className="btn-neutral btn-icon"
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
                                            <small>Or sign in with credentials</small>
                                        </div>
                                        <Form role="form">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Email"
                                                           type="email"
                                                           value={email}
                                                           onChange={(event) => setEmail(event.target.value)}
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
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        value={password}
                                                        onChange={(event) => setPassword(event.target.value)}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input
                                                    className="custom-control-input"
                                                    id=" customCheckLogin"
                                                    type="checkbox"
                                                    value={rememberMe}
                                                    onChange={() => setRememberMe(!rememberMe)}
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor=" customCheckLogin"
                                                >
                                                    <span>Remember me</span>
                                                </label>
                                            </div>
                                            <div className="text-center">
                                                <Button
                                                    className="my-4"
                                                    color="primary"
                                                    type="button"
                                                    disabled={!isFormValid}
                                                    onClick={(event) => handleLogin(event)}
                                                >
                                                    Sign in
                                                </Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Row className="mt-3">
                                    <Col className="text-right" xs="12">
                                        <Link
                                            className="text-light"
                                            to="/register"
                                        >
                                            <small>Create new account</small>
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
        login: (email, password, rememberMe) => dispatch(actions.login(email, password, rememberMe)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
