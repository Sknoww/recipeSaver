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
            showSignUp: false,
            showForgotPassword: false,
            userLoggedin: this.props.userLoggedin,
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
        this.comparePasswords = this.comparePasswords.bind(this);
        this.handleSignUpShow = this.handleSignUpShow.bind(this);
        this.handleSignUpClose = this.handleSignUpClose.bind(this);
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

            this.handleSignUpClose();
        } else {
            this.setState({
                errors: "Passwords do not match",
            });
        }
    }

    handleLogin(event) {
        event.preventDefault();
        console.log(event);
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

    handleSignUpShow = () => {
        this.setState({
            showSignUp: true,
        });
    };

    handleSignUpClose = () => {
        this.setState({
            showSignUp: false,
        });
    };

    handleForgotPasswordShow = () => {
        this.setState({
            showForgotPassword: true,
        });
    };

    handleForgotPasswordClose = () => {
        this.setState({
            showForgotPassword: false,
        });
    };

    handlePasswordReset(e) {
        e.preventDefault();
        const { auth } = this.props;
        auth.requestPasswordRecovery(this.state.email)
            .then((response) => {
                console.log("Recovery email sent", { response });
            })
            .catch((error) =>
                console.log("Error sending recovery mail: %o", error)
            );
        this.handleForgotPasswordClose();
    }

    render() {
        const { showSignUp, showForgotPassword, errors } = this.state;
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
                                handleSignUpShow={this.handleSignUpShow}
                                handleSignUpClose={this.handleSignUpClose}
                                handlePasswordReset={this.handlePasswordReset}
                                handleForgotPasswordShow={
                                    this.handleForgotPasswordShow
                                }
                                handleForgotPasswordClose={
                                    this.handleForgotPasswordClose
                                }
                                errors={errors}
                                showSignUp={showSignUp}
                                showForgotPassword={showForgotPassword}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default LoginSignUp;
