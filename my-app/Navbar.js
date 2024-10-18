import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

function Navbar({ searchBar }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid" style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Link className="navbar-brand" to="/">
          <img src={`${process.env.PUBLIC_URL}/logo2.png`} alt="ImmuniLink Logo" style={{ height: '60px' }} /> {/* Set the desired height */}
        </Link>

        {/* Toggle Button for Small Screens */}
        <button className="navbar-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Navbar Links (hidden on small screens) */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/myVaccines">My Vaccines</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reviews">Reviews</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link SignIn" to="/signin">Sign In</Link>
          </li>
        </ul>

        {/* Sidebar for Small Screens */}
        <div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
          <span className="sidebar-close" onClick={toggleSidebar}>×</span>
          <ul>
            <li>
              <Link className="nav-link" to="/" onClick={toggleSidebar}>Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/myVaccines" onClick={toggleSidebar}>My Vaccines</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about" onClick={toggleSidebar}>About Us</Link>
            </li>
            <li>
              <Link className="nav-link" to="/reviews" onClick={toggleSidebar}>Reviews</Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact" onClick={toggleSidebar}>Contact Us</Link>
            </li>
            <li>
              <Link className="nav-link SignIn" to="/signin" onClick={toggleSidebar}>Sign In</Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        {searchBar && (
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
