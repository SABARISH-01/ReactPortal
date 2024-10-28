import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Pharmacy Management Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-section sales-overview">
          <h2>Sales Overview</h2>
          <p>Total Sales Today: $1,200</p>
          <p>Total Sales This Week: $8,500</p>
          <p>Total Sales This Month: $34,000</p>
        </div>

        <div className="dashboard-section inventory-status">
          <h2>Inventory Status</h2>
          <p>Items in Stock: 3,500</p>
          <p>Low Stock Items: 150</p>
          <p>Out of Stock Items: 20</p>
        </div>

        <div className="dashboard-section orders">
          <h2>Orders</h2>
          <p>Pending Orders: 10</p>
          <p>Orders in Progress: 5</p>
          <p>Completed Orders: 30</p>
        </div>

        <div className="dashboard-section reports">
          <h2>Reports</h2>
          <button className="btn">Generate Sales Report</button>
          <button className="btn">Generate Inventory Report</button>
          <button className="btn">Generate Order Report</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
