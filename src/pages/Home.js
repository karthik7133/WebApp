import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";
import "./Home.css"; // optional custom styles
import { FaSearch, FaCalendarAlt, FaCar } from "react-icons/fa";

function Home() {
  const featuredCars = [
    {
      id: 1,
      name: "Honda City",
      price: "₹1200/day",
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80https://imgd.aeplcdn.com/227x128/n/cw/ec/134287/city-exterior-right-front-three-quarter-78.jpeg?isig=0&q=80/250x150",
    },
    {
      id: 2,
      name: "Maruti Swift",
      price: "₹1000/day",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5m1s5Cotvj2aBjSNFQ74oN1zyNNnMN5fPpA&s/250x150",
    },
    {
      id: 3,
      name: "Hyundai Creta",
      price: "₹1500/day",
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80/250x150",
    },
    {
      id: 4,
      name: "Tata Nexon",
      price: "₹1300/day",
      image:
        "https://imgd.aeplcdn.com/642x336/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80/250x150",
    },
    {
      id: 5,
      name: "Maruti Dzire",
      price: "₹1600/day",
      image:
        "https://imgd-ct.aeplcdn.com/310x174/n/cw/ec/170299/dzire-2024-right-front-three-quarter.jpeg?isig=0&q=80/250x150",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Find the Perfect Car for Your Journey</h1>
          <p>Easy rentals, flexible dates, and verified cars.</p>
          <SearchBar />
        </div>
      </section>

      <section className="featured">
        <h2>Popular Picks</h2>
        <div className="car-list">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ul className="steps-list">
          <li>
            <FaSearch className="icon" /> Search & Select a Car
          </li>
          <li>
            <FaCalendarAlt className="icon" /> Book with Flexible Dates
          </li>
          <li>
            <FaCar className="icon" /> Pick Up and Enjoy the Ride
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

export default Home;
