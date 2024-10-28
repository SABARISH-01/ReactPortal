import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">Pharmacy Management</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#getstarted" className="cta">Get Started</a>
        </nav>
      </header>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Manage Your Pharmacy Efficiently</h1>
          <p>With our comprehensive platform, managing your pharmacy has never been easier.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
      
      <section className="dashboard">
        <h2>Dashboard</h2>
        <div className="dashboard-grid">
          <div className="dashboard-item">
            <h3>Total Sales</h3>
            <p>$12,340</p>
          </div>
          <div className="dashboard-item">
            <h3>New Prescriptions</h3>
            <p>45</p>
          </div>
          <div className="dashboard-item">
            <h3>Inventory Status</h3>
            <p>Low Stock: 3 items</p>
          </div>
          <div className="dashboard-item">
            <h3>Customer Feedback</h3>
            <p>4.8/5.0</p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>&copy; 2024 Pharmacy Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
