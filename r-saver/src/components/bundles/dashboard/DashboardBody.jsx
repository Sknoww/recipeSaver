import React, { Component } from "react";
import { Button } from "react-bootstrap";
import DatabaseControls from "../../utility/DatabaseControls";

const faunadb = require("faunadb"),
    q = faunadb.query;

var adminClient = new faunadb.Client({
    secret: "fnADyGyuzeACDYztAkRD0ZCuQXJXjQunoTxpr8Zf",
});

class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    createRecipe() {
        adminClient
            .query(
                q.Update(q.Ref(q.Collection("Recipes"), "272595044793319949"), {
                    data: {
                        user: "test@gmail.com",
                        recipes: [
                            {
                                name: "example2",
                                description: "example",
                                yield: 10,
                                link:
                                    "https://www.myrecipes.com/recipe/country-potatoes-au-gratin",
                                ingredients: ["test1", "test2", "test3"],
                                steps: {
                                    "1": "example",
                                    "2": "example2",
                                    "3": "example3",
                                },
                            },
                        ],
                    },
                })
            )
            .then(function (response) {
                console.log(response);
            });
    }

    getRecipe() {
        adminClient
            .query(q.Get(q.Match(q.Index("recipes_by_user"), "test@gmail.com")))
            .then(function (response) {
                console.log(response);
            });
    }

    render() {
        const data = {
            user: "test@gmail.com",
            recipes: [
                {
                    name: "example2",
                    description: "example",
                    yield: 10,
                    link:
                        "https://www.myrecipes.com/recipe/country-potatoes-au-gratin",
                    ingredients: ["test1", "test2", "test3"],
                    steps: {
                        "1": "example",
                        "2": "example2",
                        "3": "example3",
                    },
                },
            ],
        };
        const test = new DatabaseControls(this.props.user, data);
        return (
            <div>
                <Button onClick={test.createNewUsersDocument}>
                    TESTCREATERECIPE
                </Button>
                <Button onClick={test.getRecipes}>TESTGETRECIPE</Button>
            </div>
        );
    }
}

export default DashboardBody;
