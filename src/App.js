import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarListings from "./pages/CarListings";
import CarDetails from "./pages/CarDetails";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-listings" element={<CarListings />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
