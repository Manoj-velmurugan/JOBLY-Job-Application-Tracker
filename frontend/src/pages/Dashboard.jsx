import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;
