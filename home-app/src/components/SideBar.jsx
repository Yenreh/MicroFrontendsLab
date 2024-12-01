import React from "react";
import "../styles/Sidebar.css"
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <button className="btn-link">
                        <MdDashboard className="icon" />
                        Vista General
                    </button>
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
