

import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar({ searchBar }) {
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
          <li className="nav-item">
            <Link className="nav-link SignIn" to="/signin">
              Sign In
            </Link>
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
