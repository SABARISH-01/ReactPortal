import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Pharmacy Management System</h1>
          <nav className="header-nav">
            {/* Use Link instead of a tags for client-side routing */}
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/signup" className="header-link">Sign Up</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <h1 className="hero-title">Welcome to Your Pharmacy Management System</h1>
        <p className="hero-text">
          Manage your pharmacy efficiently with ease and convenience.
        </p>
        <Link to="/signup">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
