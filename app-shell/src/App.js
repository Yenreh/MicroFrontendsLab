import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('HomeApp/Home'));
const Users = lazy(() => import('UsersApp/Users'));
const Login = lazy(() => import('LoginApp/Login'));
function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;