import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const EditUserForm = ({ user, onClose, onSubmit }) => {
    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h3>Editar Usuario</h3>
                        <form onSubmit={onSubmit} className="form-group">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Nombre"
                                    defaultValue={user.name}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cc_user" className="form-label">CC</label>
                                <input
                                    type="text"
                                    id="cc_user"
                                    className="form-control"
                                    placeholder="Número de identificación"
                                    defaultValue={user.cc}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="nombre@gmail.com"
                                    defaultValue={user.email}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Número de Teléfono</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="form-control"
                                    placeholder="Número"
                                    defaultValue={user.phone}
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                                <button type="button" onClick={onClose} className="btn btn-secondary">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditUserForm;