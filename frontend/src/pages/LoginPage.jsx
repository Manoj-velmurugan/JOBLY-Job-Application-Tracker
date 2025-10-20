import React from "react";
import logo from "../assets/jobly_logo.png";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to white px-4">
            {/* Login Card */}
            <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center space-x-3">
                        <img src={logo} alt="Jobly Logo" className="h-12 w-auto"/>
                    </div>
                </div>
                <p className="mt-4 text-gray-700 font-medium text-center">
                    Login to your account
                </p>

            {/* Login Form */}
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input type="email" id="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-400"/>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        password
                    </label>
                    <input type="password" id="password" placeholder="Enter your password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition text-lg font-medium">
                    Login In
                </button>
            </form>
            <p className="mt-4 text-center text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
                </a>
            </p>
        </div>
    </div>
    );
};

export default LoginPage;