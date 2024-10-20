import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUserMd, FaShieldAlt } from "react-icons/fa"; // Import icons
import './LandingPage.css'; // Import the CSS file

// Array of image paths for the carousel
const images = [
  "/health.jpg",
  "/health1.jpg",
  "/health2.jpg",
  "/health3.jpg",
];

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="landing-page">
      <div className="image-container">
        <img src={images[currentIndex]} alt="ImmuniLink" className="immunilink-image" />
      </div>
      <div className="content-container">
        <h1 className="title">Welcome to ImmuniLink</h1>
        <div className="button-group">
          <Link to="/signin" className="btn">
            <FaUser /> User Login
          </Link>
          <Link to="/Doctor" className="btn">
            <FaUserMd /> Doctor Login
          </Link>
          <Link to="/DoctorDashboard" className="btn">
            <FaShieldAlt /> Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
