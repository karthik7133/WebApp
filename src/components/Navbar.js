// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import "./Navbar.css";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">RentMyRide</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className="linklon"> Home</Link></li>
          
          <li><button onClick={() => setShowLogin(true)} className="login-btn">Login</button></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
