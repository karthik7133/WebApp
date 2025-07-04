import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarListings from "./pages/CarListings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-listings" element={<CarListings />} />
      </Routes>
    </Router>
  );
}

export default App;
