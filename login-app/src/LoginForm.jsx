import React from 'react';
import { motion } from 'framer-motion';
import InputField from "./components/InputField";
import { FiEye, FiMail, FiLock } from 'react-icons/fi';
import "./login.css";

const LoginForm = () => {
    return (
        <motion.form className="login-form">
            <h2 className="login-title">
                Iniciar Sesión
            </h2>

            <div className="input-container">
                <InputField
                    label="Email"
                    type="email"
                    icon={<FiMail className="icon" />}
                />

                <div className="relative">
                    <InputField
                        label="Contraseña"
                        type="password"
                        icon={<FiLock className="icon" />}
                    />

                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                        />
                        <span className="checkbox-label">
                            Recordarme
                        </span>
                    </label>
                    <a
                        type="button"
                        className="forgot-password"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                <button
                    type="submit"
                    className="submit-button"
                    onClick={(e) => { e.preventDefault(); window.location.href =window.location.origin; }}
                >  

                    <span className="submit-text">Iniciar</span>
                </button>

                <p className="register-link">
                    ¿No tienes una cuenta?{' '}
                    <a href="/register" className="register-text">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </motion.form>
    );
};

export default LoginForm;
