import React from "react";
import logo from "../assets/jobly_logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="w-64 bg-white shadow-md flex flex-col justify-between p-6">
            <div>
                <div className="flex flex-col items-start mb-12">
                    <img src={logo} alt="Jobly Logo" className="h-12 w-auto mb-2" />
                </div>

                <nav className="space-y-2">
                    <button onClick={() => navigate("/dashboard")} className="w-full text-left py-2 px-4 bg-blue-100 text-blue700 font-bold rounded-r-full">
                        Dashboard
                    </button>
                    <button onClick={() => navigate("/myjobs")} className="w-full text-left py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-r-full">
                        My Jobs
                    </button>
                </nav>
            </div>

            <button onClick={handleLogout} className="mt-auto py-2 px-4 text-gray-600 text-left hover:text-red-600 transition">
                Logout
            </button>
        </div>
    );
};

export default Sidebar;