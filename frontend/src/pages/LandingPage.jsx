import React from "react";
import logo from "../assets/jobly_logo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="flex flex-wrap justify-between items-center px-6 py-4 border-b border-gray-100">
                <div className="flex items-center">
                    <img src={logo} alt="Jobly Logo" className="h-11 w-auto" />
                </div>

                <div className="flex space-x-3 mt-3 sm:mt-0">
                    <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition text-sm sm:text-base " onClick={() => navigate("/login")}>
                        Log In
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition text-sm sm:text-base" onClick={() => navigate("/signup")}>
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex flex-col items-center text-center px-6 py-16 flex-grow">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                    <div className="mb-2">Track Your Job Applications.</div>
                    <div className="mb-2">Stay Organized.</div>
                    <div className="mb-2">Get Hired</div>
                </h2>

                <img src="" alt="" className="mt-10 w-full max-w-3xl rounded-xl shadow-lg"/>
            </main>
        </div>
    );
};

export default LandingPage;