import React, { Component } from "react";
import ISDisplay from "./ISDisplay";
import ISInput from "./ISInput";

class RecipeSaverBodyBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            steps: {},
            inputs: [],
        };

        this.addIngredient = this.addIngredient.bind(this);
        this.subtractIngredient = this.subtractIngredient.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleDisplaySubmit = this.handleDisplaySubmit.bind(this);
    }

    addIngredient(ingredient) {
        console.log("ADDING");
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, { ingredient: ingredient }],
        }));
    }

    subtractIngredient(ingredientToFind) {
        const { ingredients } = this.state;
        const removeIndex = ingredients
            .map(function (ingredient) {
                return ingredient.ingredient;
            })
            .indexOf(ingredientToFind);
        ingredients.splice(removeIndex, 1);
        this.setState((prevState) => ({
            ingredients: ingredients,
        }));
    }

    handleInputSubmit(e) {
        e.preventDefault();
        console.log(e.target.querySelector(".ingredient").value);
        this.addIngredient(e.target.querySelector(".ingredient").value);
        e.target.querySelector(".ingredient").value = "";
    }

    handleDisplaySubmit(e) {
        e.preventDefault();
        const ingredientToFind = e.target.querySelector(".displayedIngredient")
            .value;
        this.subtractIngredient(ingredientToFind);
    }

    render() {
        const { type } = this.props;
        const { ingredients } = this.state;
        return (
            <div className="ingredientAndStepInput">
                <div>
                    <ISInput
                        handleSubmit={this.handleInputSubmit}
                        ingredients={ingredients}
                        type={type}
                        addIngredient={this.addIngredient}
                    />
                    <ISDisplay
                        ingredients={ingredients}
                        symbol="+"
                        handleSubmit={this.handleDisplaySubmit}
                        addIngredient={this.addIngredient}
                        subtractIngredient={this.subtractIngredient}
                    />
                </div>
            </div>
        );
    }
}

export default RecipeSaverBodyBottom;
