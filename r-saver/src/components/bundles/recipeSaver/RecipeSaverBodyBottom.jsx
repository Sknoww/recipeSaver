import React, { Component } from "react";
import RecipeSaverBodyBottomInputs from "./RecipeSaverBodyBottomInputs";

class RecipeSaverBodyBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="inputFieldsBodyBottom">
                <div className="columnBodyTop">
                    <RecipeSaverBodyBottomInputs type="Ingredient" />
                </div>
                <div className="columnBodyTop">
                    <RecipeSaverBodyBottomInputs type="Step" />
                </div>
            </div>
        );
    }
}

export default RecipeSaverBodyBottom;
