import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import OutOfStock from './components/OutOfStock'
import ExpiredDrugs from "./components/ExpiredDrugs";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/OutOfStock" element={<OutOfStock/>} />
            <Route path="/expired-drugs" element={<ExpiredDrugs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
