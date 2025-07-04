// components/BookingPanel.js
import React from "react";
import "./BookingPanel.css";

function BookingPanel({ car, onBook }) {
  return (
    <div className="booking-panel">
      <h3>Ready to Book?</h3>
      <p>Price: ₹{car.pricePerDay} per day</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
}

export default BookingPanel;
