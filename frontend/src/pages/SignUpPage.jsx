import React from "react";
import logo from "../assets/jobly_logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                name, email, password,
            });
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert("Error creating account. please try again.");
        }
    };

    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient_to_br from blue-500 to-white px-4">
        {/* Sign Up Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
            <div className="text-center mb-6">
                <div className="flex flex-col items-center">
                    <img src={logo} alt="jobly Logo" className="h-12 w-auto" />
                </div>
                <h2 className="mt-4 text-gray-700 font-medium text-center">Create an Account</h2>
            </div>

            {/* Sign Up Form */}
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" placeholder="you@example.com" onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm your password" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button type="submit" onClick={handleSignup} className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600 tranisiton">
                    Sign Up
                </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline font-medium">
                Log in
                </a>
            </p>
        </div>
    </div>
    );
};

export default SignUpPage;