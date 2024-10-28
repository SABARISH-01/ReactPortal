import React from 'react';
import { Link } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
    return (
        <nav className="appbar">
            <h1 className="title">Pharmacy Management System</h1>
            <div className="nav-links">
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>
            </div>
        </nav>
    );
};

export default AppBar;
