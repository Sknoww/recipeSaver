import React, { Component } from "react";
import RecipeSaverBodyTop from "./RecipeSaverBodyTop";
import RecipeSaverBodyBottom from "./RecipeSaverBodyBottom";

//Css
import "../../../css/RecipeSaver.css";

class RecipeSaverBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const ColoredLine = ({ color }) => (
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                }}
            />
        );
        if (this.props.userLoggedIn) {
            return (
                <React.Fragment>
                    <div className="rowRecipeSaverTop">
                        <div className="header">
                            {
                                <RecipeSaverBodyTop
                                    handleChange={this.props.handleChange}
                                />
                            }
                        </div>
                        <div>{<ColoredLine color="#ff526a" />}</div>
                        <div className="inputFieldsBodyBottom">
                            <div className="columnBodyTop">
                                <RecipeSaverBodyBottom
                                    type="Ingredient"
                                    handleChange={
                                        this.props
                                            .handleUpdateIngredientsOrSteps
                                    }
                                />
                            </div>
                            <div className="columnBodyTop">
                                <RecipeSaverBodyBottom
                                    type="Step"
                                    handleChange={
                                        this.props
                                            .handleUpdateIngredientsOrSteps
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div></div>
                </React.Fragment>
            );
        }
    }
}

export default RecipeSaverBody;
