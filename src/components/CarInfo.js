import React from "react";
import "./CarInfo.css";

function CarInfo({ car }) {
  return (
    <div className="car-info">
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <ul className="specs">
        <li>🚘 Transmission: {car.transmission}</li>
        <li>⛽ Fuel Type: {car.fuel}</li>
        <li>🪑 Seats: {car.seats}</li>
        <li>📏 Mileage: {car.mileage}</li>
        <li>💰 ₹{car.pricePerDay} / day</li>
      </ul>
      <h4>Features:</h4>
      <ul className="features">
        {car.features.map((f, i) => (
          <li key={i}>✅ {f}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarInfo;
