import React, { useEffect, useState } from "react";
 // Import CSS for styling

const MyVaccines = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    // Fetch the vaccines from local storage
    const savedVaccines = localStorage.getItem("vaccines");
    if (savedVaccines) {
      setVaccines(JSON.parse(savedVaccines));
    }
  }, []);

  return (
    <div className="container my-3">
      <h2 className="section-title">My Vaccines</h2>
      {vaccines.length > 0 ? (
        <ul className="list-group">
          {vaccines.map((vaccine) => (
            <li key={vaccine.sno} className="list-group-item vaccine-card">
              <h5>{vaccine.name}</h5>
              <p>{vaccine.desc}</p>
              <small>Age Limit: <strong>{vaccine.ageLimit}</strong></small><br />
              <small>Government Price: <strong>₹{vaccine.govtPrice}</strong></small><br />
              <div 
                className={`mt-2 p-2 status-indicator ${vaccine.completed ? 'bg-success' : 'bg-danger'}`}
                style={{ borderRadius: '5px' }}
              >
                <small className="status-text">
                  {vaccine.completed ? 
                    `Completed by: ${vaccine.completionInfo.completedBy} on ${vaccine.completionInfo.completedDate}` : 
                    "Not completed yet"}
                </small>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vaccines available.</p>
      )}
    </div>
  );
};

export default MyVaccines;
