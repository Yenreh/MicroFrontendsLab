import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import "./styles/Users.css"
import Sidebar from "./components/SideBar";
import UserTable from "./components/UserTable";

const Users = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-content">
                    <UserTable />
                </main>
            </div>
    </div>
    );

};

export default Users;