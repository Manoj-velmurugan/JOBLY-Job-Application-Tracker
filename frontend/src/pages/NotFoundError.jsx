import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/jobly_logo.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <img src={logo} alt="Jobly Logo" className="h-16 mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or you don’t have permission to access it.
      </p>
      <div className="flex space-x-3">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Go Home
        </button>
        <button
          onClick={() => navigate("/login")}
          className="border border-blue-500 text-blue-500 px-5 py-2 rounded-md hover:bg-blue-100 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
