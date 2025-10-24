import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import { FaBars, FaTimes } from "react-icons/fa";

const DashboardPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-blue-50 overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-64 md:min-h-screen`}
      >
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={20} className="text-gray-600" />
          </button>
        </div>

        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Jobly Dashboard</h2>
          <button onClick={() => setIsSidebarOpen(true)}>
            <FaBars size={20} className="text-gray-700" />
          </button>
        </div>

        <main className="flex-1 overflow-y-auto">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
