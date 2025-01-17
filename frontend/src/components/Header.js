import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Welcome back, Time2Deal</h1>
      <div className="user-info">
        <input type="search" placeholder="Search..." />
        <span>🔔</span>
        <span>👤 Ketut Susilo</span>
      </div>
    </div>
  );
};

export default Header;
