import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Doctor.css";
import "./MyVaccines.css";

function Doctor() {
  const [email, setEmail] = useState(""); // State for user email
  const [userId, setUserId] = useState(""); // State for user ID
  const [vaccines, setVaccines] = useState([]); // State for storing fetched vaccines
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token"); // Retrieve token from local storage

  // Use effect to load email from local storage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  // Fetch user ID based on the email
  const fetchUserId = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/auth/get-user-id?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserId(response.data._id);
      fetchUserVaccines(response.data._id); // Fetch vaccines for the user

      // Save email to local storage
      localStorage.setItem("email", email);
    } catch (error) {
      console.error("Error fetching user ID:", error);
      setError("Error fetching user ID");
    }
  };

  // Fetch vaccines for the user
  const fetchUserVaccines = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/user-vaccines/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVaccines(response.data);
    } catch (error) {
      console.error("Error fetching user vaccines:", error);
      setError("Error fetching user vaccines");
    } finally {
      setLoading(false);
    }
  };

  // Mark a vaccine as complete
  const markComplete = async (vaccine) => {
    try {
      console.log("Marking complete for:", {
        userId: userId,
        vaccineId: vaccine.vaccineId._id,
      });

      // Use the correct endpoint with userId and vaccineId in the URL
      const response = await axios.put(`http://localhost:8080/user-vaccines/${userId}/${vaccine.vaccineId._id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data); // Log the response

      if (response.data.success) {
        console.log("Vaccine marked complete:", vaccine._id);
        // Update the local state to reflect the completion status
        setVaccines((prevVaccines) =>
          prevVaccines.map((v) =>
            v._id === vaccine._id ? { ...v, isCompleted: true } : v
          )
        );
      }
    } catch (error) {
      console.error("Error marking vaccine as complete:", error.response?.data || error);
      setError("Error marking vaccine as complete");
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    fetchUserId(); // Fetch user ID based on email
  };

  return (
    <div className="doctor-container">
      <h2 className="title">Doctor Vaccine Dashboard</h2>

      {/* Input field for email */}
      <form onSubmit={handleEmailSubmit} className="email-form">
        <input
          type="email"
          placeholder="Enter User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input" // Add class for styling
        />
        <button type="submit" className="btn btn-primary"> <i className="fas fa-search"></i>Fetch Vaccines</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : vaccines.length > 0 ? (
        <div className="vaccine-list">
          {vaccines.map((vaccine) => (
            <div key={vaccine._id} className="vaccine-card">
              <h5>{vaccine.vaccineId.name}</h5>
              <p>{vaccine.vaccineId.description}</p>
              {vaccine.isCompleted ? (
                <p className="completed">Marked as Complete</p>
              ) : (
                <button onClick={() => markComplete(vaccine)} className="btn btn-success">
                <i className="fas fa-check"></i>Mark Complete
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No vaccines found for this user.</p>
      )}
    </div>
  );
}

export default Doctor;
