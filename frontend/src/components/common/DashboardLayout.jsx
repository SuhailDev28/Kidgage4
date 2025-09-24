import React from "react";
import "./dashboardLayout.css";
import Sidebar from "./sidebar/sidebar";
import Dashboard from "../dashboard";
import API_BASE_URL from "../../config.js";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dash-layout-container">
      {/* sidebar */}
      <div className="sidebar-conteiner">
        <Sidebar />
      </div>
      {/* content */}
      <div className="dash-layout-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLayout;
