import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CarCard from "../components/CarCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CarListings.css";

function CarListings() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromDate = queryParams.get("from");
  const toDate = queryParams.get("to");
  const place = queryParams.get("location");

  const [cars, setCars] = useState([]);

  useEffect(() => {
    // In real app, fetch from backend using fromDate, toDate, place
    const dummyCars = [
      { id: 1, name: "Toyota Innova", price: "₹1800/day", image: "https://via.placeholder.com/250x150" },
      { id: 2, name: "Hyundai i20", price: "₹1000/day", image: "https://via.placeholder.com/250x150" },
      { id: 3, name: "Kia Seltos", price: "₹1400/day", image: "https://via.placeholder.com/250x150" }
    ];
    setCars(dummyCars);
  }, [fromDate, toDate, place]);

  return (
    <>
      <Navbar />
      <div className="listings-page">
        <h2>Available Cars in {place} from {fromDate} to {toDate}</h2>
        <div className="car-list">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarListings;
