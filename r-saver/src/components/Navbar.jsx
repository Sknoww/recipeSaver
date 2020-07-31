import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// Css
import "../css/navbar.css";

// Stateless functional component
const NavigationBar = ({ style, handleLoggedInNavBar }) => {
    return (
        <Navbar style={style} variant="dark" bg="primary" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="navLinksBar" id="basic-navbar-nav">
                <Nav className="navLinksBar">
                    <Nav.Link className="navBarLink" href="/">
                        Welcome
                    </Nav.Link>
                    <Nav.Link className="navBarLink" href="/RecipeSaver">
                        Recipe Saver
                    </Nav.Link>
                    <Nav.Link className="navBarLink" href="/Settings">
                        Settings
                    </Nav.Link>
                    {handleLoggedInNavBar}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
