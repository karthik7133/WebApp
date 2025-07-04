import React, { useState } from "react";
import "./BookingModal.css";
import { useNavigate } from "react-router-dom";


function BookingModal({ car, onClose }) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const getTotalDays = () => {
    if (!fromDate || !toDate) return 0;
    const diff = new Date(toDate) - new Date(fromDate);
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const totalCost = getTotalDays() * car.pricePerDay;

  

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !fromDate || !toDate) {
      alert("Please fill in all fields before booking.");
      return;
    }
  
    alert(`Booking confirmed!`);
    onClose();
    navigate("/");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Book {car.name}</h2>

        <input type="text" placeholder="Your Name" value={name}
          onChange={(e) => setName(e.target.value)} required />

        <input type="tel" placeholder="Phone Number" value={phone}
          onChange={(e) => setPhone(e.target.value)} />

        <input type="date" value={fromDate}
          onChange={(e) => setFromDate(e.target.value)} />

        <input type="date" value={toDate}
          onChange={(e) => setToDate(e.target.value)} />

        <p>Total Days: {getTotalDays()} | Cost: ₹{totalCost}</p>

        <button className="book-btn" onClick={handleSubmit}>Confirm Booking</button>
      </div>
    </div>
  );
}

export default BookingModal;
