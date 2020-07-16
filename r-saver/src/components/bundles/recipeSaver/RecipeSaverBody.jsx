import React, { Component } from "react";
import RecipeSaverBodyTop from "./RecipeSaverBodyTop";
import RecipeSaverBodyBottom from "./RecipeSaverBodyBottom";
import { Button } from "react-bootstrap";

//Css
import "../../../css/RecipeSaver.css";

class RecipeSaverBody extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <div className="rowRecipeSaverTop">
                    <div className="columnTop">
                        <div className="header">{<RecipeSaverBodyTop />}</div>
                        <div className="footer">
                            {<RecipeSaverBodyBottom />}
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
