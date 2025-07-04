import React from "react";
import "./CarGallery.css";

function CarGallery({ images }) {
  return (
    <div className="car-gallery">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Car ${index + 1}`} />
      ))}
    </div>
  );
}

export default CarGallery;
