import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
