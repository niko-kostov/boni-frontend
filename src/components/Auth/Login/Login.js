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
import {useForm} from "react-hook-form";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const {register, watch, errors, handleSubmit} = useForm();

    const handleLogin = (data) => {
        props.login(data.emailInput, data.passwordInput, rememberMe);
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
                                        <Form role="form" onSubmit={handleSubmit(handleLogin)}>
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input placeholder="Email"
                                                           name="emailInput"
                                                           innerRef={register({
                                                               required: true,
                                                               pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                                                           })}
                                                   />
                                                </InputGroup>
                                                {
                                                    errors.emailInput &&
                                                    errors.emailInput?.type === "required" &&
                                                    <span
                                                        className="text-danger font-weight-500">Please enter email!</span>
                                                }
                                                {
                                                    errors.emailInput &&
                                                    errors.emailInput?.type === "pattern" &&
                                                    <span
                                                        className="text-danger font-weight-500">Enter valid email!</span>
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
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="off"
                                                        name="passwordInput"
                                                        innerRef={register({
                                                            required: true
                                                        })}
                                                    />
                                                </InputGroup>
                                                {
                                                    errors.passwordInput &&
                                                    errors.passwordInput?.type === "required" &&
                                                    <span
                                                        className="text-danger font-weight-500">Please enter password!</span>
                                                }
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
                                                    type="submit"
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => dispatch(actions.login(email, password, rememberMe)),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
