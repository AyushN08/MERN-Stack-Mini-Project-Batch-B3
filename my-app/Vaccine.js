import React from "react";

export default function Vaccine({ vaccines, onDelete, markComplete, showCompleted }) {
  return (
    <div className="container">
      <h3 className="my-3">Vaccine List</h3>
      {vaccines.length === 0 ? (
        "No vaccines to display"
      ) : (
        vaccines
          .filter((vaccine) => (showCompleted ? true : !vaccine.completed))
          .map((vaccine) => (
            <div key={vaccine.sno} className="card my-3">
              <div className="card-body">
                <h5
                  className={`card-title ${
                    vaccine.completed ? "completed" : ""
                  }`}
                >
                  {vaccine.name}
                </h5>
                <p className={`card-text ${vaccine.completed ? "completed" : ""}`}>
                  {vaccine.desc}
                </p>
                <p className={`card-text ${vaccine.completed ? "completed" : ""}`}>
                  Age Limit: {vaccine.ageLimit}
                </p>
                <p className={`card-text ${vaccine.completed ? "completed" : ""}`}>
                  Government Price: ₹{vaccine.govtPrice}
                </p>
                {vaccine.completed && vaccine.completionInfo && (
                  <p className="text-danger">
                    Marked as completed by {vaccine.completionInfo.completedBy} on {vaccine.completionInfo.completedDate}
                  </p>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(vaccine)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-success mx-2"
                  onClick={() => markComplete(vaccine)}
                >
                  {vaccine.completed ? "Mark as Incomplete" : "Mark as Complete"}
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
