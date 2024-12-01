import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import "./styles/Users.css"
import Sidebar from "./components/SideBar";

const Users = () => {
    return (
        <div className="dashboard">
        <Navbar />
        <div className="dashboard-content">
            <Sidebar />

            <main className="main-content">
                <h1>Usuarios</h1>
            </main>
        </div>
    </div>
    );

};

export default Users;