// AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Admin Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbarNav"
          aria-controls="adminNavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="adminNavbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Vaccinedashboard">
                Manage Vaccines
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Doctordashboard">
                Manage Doctors
              </Link>
            </li>
            {/* You can add more links here if needed */}
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="button">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
