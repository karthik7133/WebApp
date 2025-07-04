import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarGallery from "../components/CarGallery";
import CarInfo from "../components/CarInfo";
import BookingPanel from "../components/BookingPanel";
import "./CarDetails.css";
import BookingModal from "../components/BookingModal";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Dummy car data (normally you'd fetch by ID from backend)
    const dummyCarData = {
      id,
      name: "Hyundai i20 Sportz",
      pricePerDay: 1000,
      fuel: "Petrol",
      seats: 5,
      mileage: "18 kmpl",
      transmission: "Manual",
      description: "A stylish, compact hatchback ideal for city and highway driving.",
      features: ["AC", "Airbags", "Bluetooth Audio", "Reverse Camera"],
      images: [
        "https://images.unsplash.com/photo-1645534718592-68be1ffd0fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2VlbHN8ZW58MHx8MHx8fDA%3D/400x250",
        "https://plus.unsplash.com/premium_photo-1664360971041-5024c24fa81e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHN0ZWVyaW5nfGVufDB8fDB8fHww/400x250",
        "https://images.unsplash.com/photo-1571095839085-f957a2088168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhciUyMHNlYXRpbmd8ZW58MHx8MHx8fDA%3D/400x250"
      ]
    };

    setCar(dummyCarData);
  }, [id]);
  

  if (!car) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="car-details-container">
        <CarGallery images={car.images} />
        <CarInfo car={car} />
        <BookingPanel car={car} onBook={() => setShowModal(true)} />
      </div>
      {showModal && (
        <BookingModal car={car} onClose={() => setShowModal(false)} />
      )}
      <Footer />
    </>
  );
}

export default CarDetails;
