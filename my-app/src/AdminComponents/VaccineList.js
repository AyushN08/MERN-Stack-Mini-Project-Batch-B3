// src/components/VaccineList.js
import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const VaccineList = ({ vaccines, onEdit, onDelete }) => {
  const [deleteError, setDeleteError] = useState(''); // State to handle delete error messages

  const handleDelete = (id) => {
    // Confirm deletion
    if (window.confirm('Are you sure you want to delete this vaccine?')) {
      axios.delete(`http://localhost:8080/vaccines/${id}`)
        .then(() => {
          onDelete(id);
          setDeleteError(''); // Clear any previous errors
        })
        .catch(() => {
          setDeleteError('Error deleting vaccine. Please try again.'); // Display error if delete fails
        });
    }
  };

  return (
    <div>
      {deleteError && <div className="alert alert-danger">{deleteError}</div>} {/* Display delete error */}

      {vaccines.length === 0 ? (
        <p>No vaccines available. Add a vaccine to get started.</p> // Show message if no vaccines are available
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Age Limit</th>
              <th>Government Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map(vaccine => (
              <tr key={vaccine._id}>
                <td>{vaccine.name}</td>
                <td>{vaccine.description}</td>
                <td>{vaccine.ageLimit}</td>
                <td>₹{vaccine.govtPrice}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => onEdit(vaccine._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(vaccine._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VaccineList;
