import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar({ searchBar }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the token
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token, navigate to sign-in page
      navigate('/signin');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the token and any user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUserEmail');

    // Redirect the user to the login page
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="container-fluid" style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <ul className="navbar-nav">
          <Link className="navbar-brand" to="/">
            ImmuniLink
          </Link>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myVaccines">
              My Vaccines
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
          {/* Always show Logout */}
          <li className="nav-item">
            <button className="nav-link btn btn-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>

        {searchBar && (
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
