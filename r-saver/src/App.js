import React, { Component } from "react";
import NavigationBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import GoTrue from "gotrue-js";

//Pages
import Welcome from "./pages/Welcome";
import RecipeSaver from "./pages/RecipeSaver";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/404";

const auth = new GoTrue({
    APIUrl: "https://optimistic-curie-a8810b.netlify.app/.netlify/identity",
    audience: "",
    setCookie: false,
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: false,
            user: {},
            errors: "",
            show: false,
        };
        this.handleUserUpdate = this.handleUserUpdate.bind(this);
        this.handleLoggedInNavBar = this.handleLoggedInNavBar.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleUserUpdate(user) {
        this.setState({
            user: user,
            userLoggedIn: true,
        });
        localStorage.setItem("TOKEN", user.token.access_token);
    }

    handleLogout() {
        this.setState({
            userLoggedIn: false,
        });
    }

    handleLoggedInNavBar() {
        const { userLoggedIn } = this.state;
        if (userLoggedIn) {
            return (
                <Nav.Link className="navBarLink" href="/Dashboard">
                    Dashboard
                </Nav.Link>
            );
        } else {
            return (
                <Nav.Link className="navBarLink" href="/Login">
                    Login
                </Nav.Link>
            );
        }
    }

    componentDidUpdate() {
        //console.log(this.state.userLoggedIn);
    }

    componentDidMount() {
        if (localStorage.getItem("TOKEN") != null) {
            console.log("LOGGED IN");
            this.setState({
                userLoggedIn: true,
            });
        } else {
            console.log("LOGGED OUT");
            this.setState({
                userLoggedIn: false,
            });
        }
    }

    render() {
        const navStyles = {
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
        };
        const titleStyles = {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#323232",
            color: "#FF526A",
            fontFamily: "Lucida Console",
        };

        return (
            <div>
                <Router>
                    <div>
                        <h1 style={titleStyles}>R-Saver</h1>
                        <NavigationBar
                            style={navStyles}
                            handleLoggedInNavBar={this.handleLoggedInNavBar()}
                        />
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route
                                exact
                                path={"/RecipeSaver"}
                                component={RecipeSaver}
                            />
                            <Route
                                exact
                                path="/Settings"
                                component={Settings}
                            />
                            <Route
                                exact
                                path="/Login"
                                render={(props) => (
                                    <Login
                                        {...props}
                                        auth={auth}
                                        handleUserUpdate={this.handleUserUpdate}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/Dashboard"
                                render={(props) => (
                                    <Dashboard
                                        {...props}
                                        auth={auth}
                                        handleLogout={this.handleLogout}
                                    />
                                )}
                            />
                            <Route exact path="/404" component={NotFoundPage} />
                            <Redirect to="/404" />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
