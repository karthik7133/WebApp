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
      { id: 1, name: "Toyota Innova", price: "₹1800/day", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80&q=80/250x150" },
      { id: 2, name: "Mahindra XUV700", price: "₹1000/day", image: "https://elegantautoretail.com/cdn/shop/articles/Mahindra_XUV700_Specifications_And_Accessories_7bd41ed2-ecbf-421e-8aee-41a3a84617b8_1240x.jpg?v=1742817258/250x150" },
      { id: 3, name: "Ford Mustang", price: "₹1400/day", image: "https://imgd.aeplcdn.com/664x374/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80/250x150" }
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
