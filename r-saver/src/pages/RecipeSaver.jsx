import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import RecipeSaverBody from "../components/bundles/recipeSaver/RecipeSaverBody";

//CSS
import "../css/RecipeSaver.css";

class RecipeSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            yield: "",
            link: "",
            ingredients: [],
            steps: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateIngredientsOrSteps = this.handleUpdateIngredientsOrSteps.bind(
            this
        );
    }

    handleSubmit(event) {
        this.props.handleRecipeUpdate(this.state);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleUpdateIngredientsOrSteps(type, ingredients, steps) {
        type === "Ingredient"
            ? this.setState({
                  [type.toLowerCase() + "s"]: ingredients,
              })
            : this.setState({
                  [type.toLowerCase() + "s"]: steps,
              });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <MainContainer
                        {...this.props}
                        header="Recipe Saver"
                        handleSubmit={this.handleSubmit}
                        userLoggedIn={this.props.userLoggedIn}
                        body={
                            <RecipeSaverBody
                                userLoggedIn={this.props.userLoggedIn}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                handleUpdateIngredientsOrSteps={
                                    this.handleUpdateIngredientsOrSteps
                                }
                            />
                        }
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSaver;
