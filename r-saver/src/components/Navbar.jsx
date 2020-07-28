import React from "react";

// Css
import "../css/navbar.css";

// Stateless functional component
const NavBar = ({ totalCounters, style }) => {
    return (
        <nav style={style} className="navbar navbar-light bg-light">
            <a className="navBarLink m-2" href="/">
                Welcome{" "}
            </a>
            <a className="navBarLink m-2" href="/RecipeSaver">
                Recipe Saver{" "}
            </a>
            <a className="navBarLink m-2" href="/Settings">
                Settings{" "}
            </a>
            <a className="navBarLink m-2" href="/Login">
                Login{" "}
            </a>
        </nav>
    );
};

export default NavBar;
