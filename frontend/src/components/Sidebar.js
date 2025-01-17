import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
       <ul>
      <li>
        <Link to="/">🏠 Dashboard</Link>
      </li>
      <li>
        <Link to="/inventory">📦 Inventory</Link>
      </li>
      <li>
        <Link to="OutOfStock">🛒 Out Of Stock</Link>
      </li>
      <li>
        <Link to="/discounts">💰 Discounts</Link>
      </li>
      <li>
        <Link to="/expired-drugs">⏳ Expired</Link>
      </li>
      < div className="searchlogiut">
      <li>
        <a to="/settings">⚙️ Settings</a>
      </li>
      <li>
        <a to="/logout">🚪 Logout</a>
      </li>
      </div>
    </ul>
   
    </div>
  );
};

export default Sidebar;
