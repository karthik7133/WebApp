import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.price}</p>
      <Link to={`/car/${car.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default CarCard;
