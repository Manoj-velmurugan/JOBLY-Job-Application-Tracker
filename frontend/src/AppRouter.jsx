import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ViewJobDetails from "./pages/ViewJobDetails";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/signup" element={<SignUpPage/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/applications/:id" element={<ViewJobDetails />}></Route> 
            </Routes>
        </Router>
    );
};

export default AppRouter;
