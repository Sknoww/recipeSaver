import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

import "../../../css/RecipeSaver.css";

class RecipeSaverBodyTop extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="columnBodyTop">
                    <Form>
                        <Form.Group>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter recipe name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recipe Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter recipe description"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Recipe Link</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="Enter recipe link"
                            />
                        </Form.Group>
                    </Form>
                </div>
                <div className="columnBodyTop">
                    <Form.Group>
                        <Form.Label>Recipe Image</Form.Label>
                        <Form.File id="recipeImage" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter recipe name"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </div>
            </div>
        );
    }
}

export default RecipeSaverBodyTop;
