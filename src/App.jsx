import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import Treatment from "./pages/Treatment";
import Appointment from "./pages/Appointment";
import VideoConsult from "./pages/VideoConsult";
import Careers from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="navbar">
         <div className="logo">
            <span className="logo-plus">+</span> CureHere Hospital
        </div>

        <nav>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/find-doctor" className={({ isActive }) => (isActive ? "active" : "")}>Find a Doctor</NavLink></li>
            <li><NavLink to="/treatment" className={({ isActive }) => (isActive ? "active" : "")}>Treatment</NavLink></li>
            <li><NavLink to="/appointment" className={({ isActive }) => (isActive ? "active" : "")}>Book Appointment</NavLink></li>
            {/* <li><NavLink to="/video" className={({ isActive }) => (isActive ? "active" : "")}>Video Consultation</NavLink></li> */}
            <li><NavLink to="/careers" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/treatment" element={<Treatment />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/video" element={<VideoConsult />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
