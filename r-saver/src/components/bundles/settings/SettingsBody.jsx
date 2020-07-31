import React, { Component } from "react";
import { Form } from "react-bootstrap";

class SettingsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        console.log(data);
    };

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return <Form onSubmit={this.handleSubmit}>TODO</Form>;
    }
}

export default SettingsBody;
