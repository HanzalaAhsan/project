import React from 'react';
import '../styles/OutOfStock.css'

const outOfStockDrugs = [
  {
    supplierEmail: "lalam12@gmail.com",
    drugName: "Amoxillin",
    quantity: 0,
    batchId: "547547654N",
    expireDate: "Sat Sep 26 2020 05:30:00 GMT+0530",
    price: "1200",
  },
  {
    supplierEmail: "lalana@gmail.com",
    drugName: "Demo1",
    quantity: 0,
    batchId: "109283231L",
    expireDate: "Wed Aug 26 2020 05:30:00 GMT+0530",
    price: "1201",
  },
];

export default function OutOfStockPage() {
  return (
    <div className="page-container">
      <div className="tabs-container">
        <div className="tabs-header">
          <button className="tab-button">Out Of Stock Drugs</button>
          <button className="tab-button">About To Get Out Of Stock</button>
        </div>
        <div className="tabs-content">
          <div className="content-container">
            <h2 className="section-title">Out of Stock Drugs</h2>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Supplier's Email</th>
                    <th>Drug Name</th>
                    <th>Quantity</th>
                    <th>Batch ID</th>
                    <th>Expire Date</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {outOfStockDrugs.map((drug) => (
                    <tr key={drug.batchId}>
                      <td>{drug.supplierEmail}</td>
                      <td>{drug.drugName}</td>
                      <td>{drug.quantity}</td>
                      <td>{drug.batchId}</td>
                      <td>{drug.expireDate}</td>
                      <td>{drug.price}</td>
                      <td>
                        <button className="request-button">Request</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="tabs-content">
          <div className="content-container">
            <h2 className="section-title">About To Get Out Of Stock Drugs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
