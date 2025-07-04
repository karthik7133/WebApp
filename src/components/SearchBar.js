import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearch = () => {
    if (!location || !fromDate || !toDate) {
      alert("Please fill all fields");
      return;
    }
    navigate(`/car-listings?location=${location}&from=${fromDate}&to=${toDate}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
      <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
      <button onClick={handleSearch}>Search Cars</button>
    </div>
  );
}

export default SearchBar;
