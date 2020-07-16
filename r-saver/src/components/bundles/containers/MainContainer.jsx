import React, { Component } from "react";
import SecondayContainer from "./SecondaryContainer";
import { Card } from "react-bootstrap";

//Css
import "../../../css/welcome.css";

class MainContainer extends Component {
    render() {
        const { header, body } = this.props;
        const containerHeader = {
            fontFamily: "Lucida Console",
            borderRadius: "15px",
            color: "#FF465F",
            backgroundColor: "#323232",
        };

        const container = {
            display: "flex",
            justifyConten: "center",
            width: "75rem",
            height: "75rem",
        };

        return (
            <div style={container}>
                <Card border="primary" style={container}>
                    <Card.Header
                        style={containerHeader}
                        className="welcomeHeader"
                    >
                        {header}
                    </Card.Header>
                    <Card.Body>
                        <SecondayContainer body={body} />
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MainContainer;
