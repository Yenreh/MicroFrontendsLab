import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar";
import "./styles/Dashboard.css";
import Sidebar from "./components/SideBar";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard-content">
                <Sidebar />

                <main className="main-content">
                    <h1>Bienvenido al Dashboard</h1>
                   

                    <div className="cards">
                        <div className="card">
                            <h2>Usuarios</h2>
                            <p>150</p>
                        </div>
                        <div className="card">
                            <h2>Ventas</h2>
                            <p>$12,300</p>
                        </div>
                        <div className="card">
                            <h2>Reportes</h2>
                            <p>45 nuevos</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
