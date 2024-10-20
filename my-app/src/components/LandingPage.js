import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'; // Optional: styling for the landing page

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to ImmuniLink</h1>
      <div className="button-group">
        <Link to="/signin" className="btn">User Login</Link>
        <Link to="/signin" className="btn">Doctor Login</Link>
        <Link to="/signin" className="btn">Admin Login</Link>
      </div>
    </div>
  );
}

export default LandingPage;
