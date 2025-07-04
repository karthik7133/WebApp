import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">RentMyRide</div>
      <ul>
        <li>Home</li>
        <li>Cars</li>
        <li>Login</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
