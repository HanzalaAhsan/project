import React from "react";
import "../styles/Dashboard.css";
import NotificationCard from "./NotificationCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-card green">
          <h3>Out of stock</h3>
          <p>19</p>
        </div>
        <div className="stat-card yellow">
          <h3>Discounts</h3>
          <p>1.2%</p>
        </div>
        <div className="stat-card blue">
          <h3>Expired!</h3>
          <p>121</p>
        </div>
        <div className="stat-card red">
          <h3>Sales</h3>
          <p>123</p>
        </div>
      </div>
      <NotificationCard/>
    </div>
  );
};

export default Dashboard;
