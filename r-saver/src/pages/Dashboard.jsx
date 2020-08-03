import React, { Component } from "react";
import MainContainer from "../components/bundles/containers/MainContainer";
import DashboardBody from "../components/bundles/dashboard/DashboardBody";
class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser() {
        const { user } = this.props;
        if (Object.entries(user).length === 0) {
            this.props.history.push("/Login");
        } else {
            user.logout()
                .then((response) => {
                    console.log("User logged out");
                    this.props.handleLogout();
                    this.props.history.push("/Login");
                })
                .catch((error) => {
                    console.log("Failed to logout user: %o", error);
                    throw error;
                });
        }
    }

    render() {
        return (
            <React.Fragment>
                <main className="container">
                    <MainContainer
                        header="Dashboard"
                        logoutUser={this.logoutUser}
                        body={<DashboardBody user={this.props.user} />}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default Dashboard;
