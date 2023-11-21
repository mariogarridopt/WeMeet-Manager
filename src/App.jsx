import React, { useState } from 'react';
import { Route, Routes, json } from "react-router-dom";

// utils
import useToken from "./utils/useToken";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// main css
import "./css/App.css";

// Components
import NavBar from "./components/NavBar";
import Auth from "./components/Auth";
import Calendar from './components/Calendar';

export default function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Auth setToken={setToken} />
    }

    return (
        <div className="container">
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Calendar />} />
                </Routes>
            </div>
        </div>
        
    );
}