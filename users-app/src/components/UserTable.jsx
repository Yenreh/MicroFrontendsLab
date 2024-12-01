import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const UserTable = () => {
    return (
        <div className="container" style={{ maxWidth: "100%" }}>
            <div className="table-responsive" style={{ maxHeight: "480px", overflow: "auto" }}>
                 <table className="table table-bordered"> 
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>CC</th>
                            <th>Telefono</th>
                            <th>Correo electronico</th>  
                            <th colSpan="2">Opciones</th>                     
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dylan</td>
                            <td>11120545574</td>
                            <td>3135105478</td>
                            <td>dylan@gmail.com</td>
                            <td>
                                <button className="btn btn-outline-primary">
                                    Editar
                                </button>  
                            </td>
                            <td>
                                <button className="btn btn-outline-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Javier</td>
                            <td>31242694</td>
                            <td>3128601430</td>
                            <td>javier@gmail.com</td>
                            <td>
                                <button className="btn btn-outline-primary">
                                    Editar
                                </button>  
                            </td>
                            <td>
                                <button className="btn btn-outline-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Herney</td>
                            <td>2120545584</td>
                            <td>3208723420</td>
                            <td>herney@gmail.com</td>
                            <td>
                                <button className="btn btn-outline-primary">
                                    Editar
                                </button>  
                            </td>
                            <td>
                                <button className="btn btn-outline-danger">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;