import React, { Component } from "react";
import RecipeSaverBodyTop from "./RecipeSaverBodyTop";
//Css
import "../../../css/RecipeSaver.css";

class RecipeSaverBody extends Component {
    state = {};
    render() {
        return (
            <div>
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
        );
    }
}

export default RecipeSaverBody;
