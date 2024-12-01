import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('HomeApp/Home'));
const Users = lazy(() => import('UsersApp/Users'));

function App() {
    return (
        <Router>
            <div className="App">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </Suspense>
                <div className="container">App-shell container</div>
            </div>
        </Router>
    );
}

export default App;