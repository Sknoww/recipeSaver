import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import DashboardBody from "../components/bundles/dashboard/DashboardBody";
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        const user = this.props.auth.currentUser();
        console.log(user);
        user.logout()
            .then((response) => {
                console.log("User logged out");
                localStorage.clear();
                this.props.handleLogout();
                this.props.history.push("/Login");
            })
            .catch((error) => {
                console.log("Failed to logout user: %o", error);
                throw error;
            });
    }

    render() {
        console.log(this.props.history);
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header="Dashboard"
                        body={
                            <DashboardBody
                                logout={this.logoutUser}
                                auth={this.props.auth}
                            />
                        }
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default Dashboard;
