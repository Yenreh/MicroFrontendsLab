import React from "react";
import "../styles/Sidebar.css"
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="/" className="btn-link">
                        <MdDashboard className="icon" />
                        Vista General
                    </a>
                </li>
                <li>
                    <a href="/users" className="btn-link">
                        <FaUser className="icon" />
                        Usuarios
                    </a>
                </li>
                <li>
                    <a className="btn-link">
                        <BiLogOut className="icon" />
                        Cerrar Sesión
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
