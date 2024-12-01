import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { TiUserAdd } from "react-icons/ti";
import EditUserForm from './EditUserForm';
import CreateUserForm from './CreateUserForm';

const UserTable = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showCreateUserForm, setShowCreateUserForm] = useState(false);

    const users = [
        { name: "Dylan", cc: "11120545574", phone: "3135105478", email: "dylan@gmail.com" },
        { name: "Javier", cc: "31242694", phone: "3128601430", email: "javier@gmail.com" },
        { name: "Herney", cc: "2120545584", phone: "3208723420", email: "herney@gmail.com" }
    ];

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setIsEditing(true);
    };

    const handleCloseForm = () => {
        setIsEditing(false);
        setSelectedUser(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos actualizados:", selectedUser);
        setIsEditing(false);
    };

    const handleShowCreateUserForm = () => {
        setShowCreateUserForm(true);
    };

    const handleCloseCreateUserForm = () => {
        setShowCreateUserForm(false);
    };

    return (
        <div className="container" style={{ maxWidth: "100%" }}>
            <div className="table-responsive" style={{ maxHeight: "480px", overflow: "auto" }}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>CC</th>
                            <th>Teléfono</th>
                            <th>Correo Electrónico</th>
                            <th colSpan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.cc}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => handleEditClick(user)}
                                    >
                                        Editar
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="btn btn-success mb-3 float-start"
                    onClick={handleShowCreateUserForm}
                >
                    <i style={{ fontSize: "20px" }}>
                        <TiUserAdd />
                    </i>
                    Crear usuario
                </button>
            </div>
            {isEditing && (
                <EditUserForm
                    user={selectedUser}
                    onClose={handleCloseForm}
                    onSubmit={handleSubmit}
                />
            )}
            {showCreateUserForm && (
                <CreateUserForm onClose={handleCloseCreateUserForm} />
            )}
        </div>
    );
};

export default UserTable;