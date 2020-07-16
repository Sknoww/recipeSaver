import React, { Component } from "react";
import SecondayContainer from "./SecondaryContainer";
import { Card } from "react-bootstrap";

//Css
import "../../../css/welcome.css";

class MainContainer extends Component {
    render() {
        const { header, body } = this.props;
        const test = {
            fontFamily: "Lucida Console",
            borderRadius: "15px",
            color: "#FF465F",
            backgroundColor: "#323232",
        };
        return (
            <div>
                <Card border="primary">
                    <Card.Header style={test} className="welcomeHeader">
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
