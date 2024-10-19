import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import './MyVaccines.css'; 

const MyVaccines = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    const savedVaccines = localStorage.getItem("vaccines");
    if (savedVaccines) {
      setVaccines(JSON.parse(savedVaccines));
    }
  }, []);

  return (
    <div className="myVaccines-container">
      <h2 className="section-title">My Vaccines</h2>
      {vaccines.length > 0 ? (
        <ul className="list-group">
          {vaccines.map((vaccine) => (
            <li key={vaccine.sno} className="list-group-item vaccine-card">
              <h5 className="vaccine-name">{vaccine.name}</h5>
              <p className="vaccine-desc">{vaccine.desc}</p>
              <div className="vaccine-details">
                <small>Age Limit: <strong>{vaccine.ageLimit}</strong></small>
                <small>Government Price: <strong>₹{vaccine.govtPrice}</strong></small>
              </div>
              <div 
                className={`status-indicator ${vaccine.completed ? 'bg-success' : 'bg-danger'}`}
              >
                <small className="status-text">
                  {vaccine.completed ? 
                    <>
                      <FaCheckCircle className="icon-success" /> 
                      Completed by: {vaccine.completionInfo.completedBy} on {vaccine.completionInfo.completedDate}
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
