import React from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import LoginBody from "../components/bundles/login/LoginBody";
const Login = () => {
    return (
        <React.Fragment>
            <main className="container">
                <MainContainer header="Login" body={<LoginBody />} />
            </main>
        </React.Fragment>
    );
};

export default Login;
