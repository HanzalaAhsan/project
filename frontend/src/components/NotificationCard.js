import React from "react";
import "../styles/NotificationCards.css";

const NotificationCard = () => {
  return (
    <div className="notifications">
      <div className="card">
        <h2>Expire Date Notification</h2>
        <div className="item">
          <p><strong>Name:</strong> panadol</p>
          <p><strong>Batch:</strong> 78678</p>
        </div>
        <div className="item">
          <p><strong>Name:</strong> citizen</p>
          <p><strong>Batch:</strong> 78679</p>
        </div>
      </div>
      <div className="card">
        <h2>Out Of Stock</h2>
        <div className="item">
          <p><strong>Name:</strong> amoxilin</p>
          <p><strong>Batch:</strong> 78690</p>
        </div>
        <div className="item">
          <p><strong>Name:</strong> demo1</p>
          <p><strong>Batch:</strong> 78690</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
