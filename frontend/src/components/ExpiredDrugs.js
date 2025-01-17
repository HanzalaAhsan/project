import React from "react";
import "../styles/ExpiredDrugs.css";

// Sample data (replace with API data later)
const expiredDrugs = [
  {
    drugName: "Panadol",
    quantity: 2960,
    batchId: "123213N",
    expireDate: "Thu Aug 20 2020 05:30:00 GMT+0530 (India Standard Time)",
    price: 1200,
  },
  {
    drugName: "Citazin",
    quantity: 148,
    batchId: "10298329N",
    expireDate: "Tue Aug 18 2020 05:30:00 GMT+0530 (India Standard Time)",
    price: 1200,
  },
  {
    drugName: "Metformin",
    quantity: 9791,
    batchId: "1298319N",
    expireDate: "Thu Aug 20 2020 05:30:00 GMT+0530 (India Standard Time)",
    price: 1200,
  },
  {
    drugName: "Chloroperi Hybanate",
    quantity: 3423,
    batchId: "85454665B",
    expireDate: "Mon Aug 10 2020 05:30:00 GMT+0530 (India Standard Time)",
    price: 1200,
  },
];

const ExpiredDrugsPage = () => {
  return (
    <div className="expired-drugs-container">
      {/* Header Section */}
      <div className="header-tabs">
        <button className="tab active">Expired Drugs</button>
        <button className="tab">About To Expire Drugs</button>
      </div>

      {/* Drug Listing Section */}
      <h2 className="section-title">Expired Drugs</h2>
      <div className="drug-table">
        {expiredDrugs.map((drug, index) => (
          <div key={index} className="drug-card">
            <div className="drug-row">
              <span><strong>Drug Name:</strong> {drug.drugName}</span>
            </div>
            <div className="drug-row">
              <span><strong>Quantity:</strong> {drug.quantity}</span>
              <span><strong>Batch ID:</strong> {drug.batchId}</span>
            </div>
            <div className="drug-row">
              <span><strong>Expire Date:</strong> {drug.expireDate}</span>
              <span><strong>Price:</strong> {drug.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpiredDrugsPage;
