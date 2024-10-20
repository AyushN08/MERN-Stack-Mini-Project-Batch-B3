import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import './MyVaccines.css'; 
import axios from "axios";

const MyVaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserVaccines = async () => {
      // Extract JWT token from local storage
      const token = localStorage.getItem("token"); // Make sure to use the same key here
      const email = localStorage.getItem("loggedInUserEmail");
      
      if (!token || !email) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      // Decode the token to extract user ID
      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload._id;

      try {
        // Make an API call to fetch vaccines for the user
        const response = await axios.get(`http://localhost:8080/user-vaccines/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setVaccines(response.data);
      } catch (err) {
        setError("Error fetching vaccines");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserVaccines();
  }, []);

  return (
    <div className="myVaccines-container">
      <h2 className="section-title">My Vaccines</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : vaccines.length > 0 ? (
        <ul className="list-group">
          {vaccines.map((vaccine) => (
            <li key={vaccine._id} className="list-group-item vaccine-card">
              <h5 className="vaccine-name">{vaccine.vaccineId.name}</h5>
              <p className="vaccine-desc">{vaccine.vaccineId.description}</p>
              <div className="vaccine-details">
                <small>Age Limit: <strong>{vaccine.vaccineId.ageLimit}</strong></small>
                <small>Government Price: <strong>₹{vaccine.vaccineId.govtPrice}</strong></small>
              </div>
              <div 
                className={`status-indicator ${vaccine.isCompleted ? 'bg-success' : 'bg-danger'}`}
              >
                <small className="status-text">
                  {vaccine.isCompleted ? 
                    <>
                      <FaCheckCircle className="icon-success" /> 
                      Completed on: {new Date(vaccine.completionDate).toLocaleDateString()}
                    </> : 
                    <>
                      <FaTimesCircle className="icon-danger" /> 
                      Not completed yet
                    </>
                  }
                </small>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-vaccines">No vaccines available.</p>
      )}
    </div>
  );
};

export default MyVaccines;
