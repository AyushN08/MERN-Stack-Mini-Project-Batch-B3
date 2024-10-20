import React from "react";
import { Link } from "react-router-dom";


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
