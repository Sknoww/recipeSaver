import React from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import RecipeSaverBody from "../components/bundles/recipeSaver/RecipeSaverBody";

//CSS
import "../css/RecipeSaver.css";

const RecipeSaver = () => {
    return (
        <React.Fragment>
            <div className="container">
                <MainContainer
                    header="Recipe Saver"
                    body={<RecipeSaverBody />}
                />
            </div>
        </React.Fragment>
    );
};

export default RecipeSaver;
