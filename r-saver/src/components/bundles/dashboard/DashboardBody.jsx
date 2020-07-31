import React, { Component } from "react";
import { Button } from "react-bootstrap";
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Button onClick={this.props.logout}>Logout</Button>
            </div>
        );
    }
}

export default DashboardBody;
