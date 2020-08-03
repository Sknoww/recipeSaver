import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import LoginBody from "../components/bundles/login/LoginBody";
import DatabaseControls from "../components/utility/DatabaseControls";

class LoginSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            user: {},
            errors: "",
            show: false,
            userLoggedin: this.props.userLoggedin,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSignUp(event) {
        event.preventDefault();
        event.persist();
        const { email, password } = this.state;
        const { auth } = this.props;
        if (this.comparePasswords()) {
            auth.signup(email, password)
                .then((response) => {
                    console.log("Confirmation email sent", response);
                    const dbControls = new DatabaseControls();
                    dbControls.createNewUsersDocument(email);
                    this.handleLogin(event);
                })
                .catch((error) => console.log("It's an error", error));

            this.handleClose();
        } else {
            this.setState({
                errors: "Passwords do not match",
            });
        }
    }

    handleLogin(event) {
        event.preventDefault();
        const { email, password } = this.state;
        const { auth } = this.props;
        auth.login(email, password, true)
            .then((response) => {
                this.props.handleUserLogin(auth.currentUser());
                this.props.history.push("/Dashboard");
            })
            .catch((error) =>
                console.log("Failed :( " + JSON.stringify(error))
            );
    }

    comparePasswords() {
        const { password, passwordConfirmation } = this.state;
        return password === passwordConfirmation;
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleShow = () => {
        this.setState({
            show: true,
        });
    };

    handleClose = () => {
        this.setState({
            show: false,
        });
    };

    render() {
        const { show, errors } = this.state;
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header="Login"
                        body={
                            <LoginBody
                                {...this.props}
                                handleChange={this.handleChange}
                                handleLogin={this.handleLogin}
                                handleSignUp={this.handleSignUp}
                                handleShow={this.handleShow}
                                handleClose={this.handleClose}
                                errors={errors}
                                show={show}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default LoginSignUp;
