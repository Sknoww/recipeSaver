import React, { Component } from "react";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

//Pages
import Welcome from "./pages/Welcome";
import RecipeSaver from "./pages/RecipeSaver";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFoundPage from "./pages/404";

class App extends Component {
    render() {
        const navStyles = {
            display: "flex",
            justifyContent: "center",
        };
        const titleStyles = {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#323232",
            color: "#FF526A",
            fontFamily: "Lucida Console",
        };

        return (
            <Router>
                <h1 style={titleStyles}>R-Saver</h1>
                <NavBar style={navStyles} />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact path="/RecipeSaver" component={RecipeSaver} />
                    <Route exact path="/Settings" component={Settings} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/404" component={NotFoundPage} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        );
    }
}

export default App;
