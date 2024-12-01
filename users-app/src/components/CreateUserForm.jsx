import { useForm } from 'react-hook-form';
import React from 'react';

const CreateUserForm = ({ onClose }) => {

    return (
        <div className="card shadow-sm p-4">
            <h1 className="card-title text-center mb-4">Crear usuario</h1>
            <form className="form-group">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nombre"
                       
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="cc_user" className="form-label">CC</label>
                    <input
                        type="text"
                        id="cc_user"
                        className="form-control"
                        placeholder="Número de identificación"
                       
                    />
                    

                </div>

                <div className="mb-3">
                    <label htmlFor="user_type" className="form-label">Rol</label>
                    <select
                        id="user_type"
                        className="form-control"
                       
                    >
                        <option value="">Selecciona un rol</option>
                        <option value="doctor">Doctor</option>
                        <option value="paciente">Paciente</option>
                    </select>
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="nombre@gmail.com"
                       
                    />
                  
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Número</label>
                    <input
                        type="text"
                        id="phone"
                        className="form-control"
                        placeholder="Número"
                       
                    />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="date_of_birth" className="form-label">Fecha de nacimiento</label>
                    <input
                        type="date"
                        id="date_of_birth"
                        className="form-control"
                       
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                      
                    />
                   
                </div>

                <button type="submit" className="btn btn-primary w-100">Crear</button>
            </form>

            <button className="btn btn-secondary w-100 mt-3" onClick={onClose}>Cancelar</button>
        </div>
    );
};

export default CreateUserForm;