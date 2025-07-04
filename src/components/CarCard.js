import React from "react";
import "./CarCard.css";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <button>View Details</button>
    </div>
  );
}

export default CarCard;
