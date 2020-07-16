import React from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import RecipeSaverBody from "../components/bundles/recipeSaver/RecipeSaverBody";

const RecipeSaver = () => {
    return (
        <React.Fragment>
            <main className="container">
                <MainContainer
                    header="Recipe Saver"
                    body={<RecipeSaverBody />}
                />
            </main>
        </React.Fragment>
    );
};

export default RecipeSaver;
