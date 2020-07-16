import React, { Component } from "react";
import RecipeSaverBodyTop from "./RecipeSaverBodyTop";
import { Button } from "react-bootstrap";

//Css
import "../../../css/RecipeSaver.css";

class RecipeSaverBody extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="columnTop">
                        <div className="header">{<RecipeSaverBodyTop />}</div>
                        <div className="row">
                            <div className="column">
                                <h2>Column 1</h2>
                                <p>Some text..</p>
                            </div>
                            <div className="column">
                                <h2>Column 1</h2>
                                <p>Some text..</p>
                            </div>
                        </div>
                    </div>
                    <div className="columnSaveMenu">
                        <Button className="saveButton" type="submit">
                            Save
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSaverBody;
