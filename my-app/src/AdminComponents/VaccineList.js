import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './VaccineList.css'; // Import your custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons

const VaccineList = ({ vaccines, onEdit, onDelete }) => {
  const [deleteError, setDeleteError] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vaccine?')) {
      axios.delete(`http://localhost:8080/vaccines/${id}`)
        .then(() => {
          onDelete(id);
          setDeleteError('');
        })
        .catch(() => {
          setDeleteError('Error deleting vaccine. Please try again.');
        });
    }
  };

  return (
    <div>
      {deleteError && <div className="alert alert-danger">{deleteError}</div>}

      {vaccines.length === 0 ? (
        <p>No vaccines available. Add a vaccine to get started.</p>
      ) : (
        <table className="custom-table">
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
                  <button className="btn-edit" onClick={() => onEdit(vaccine._id)}>
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(vaccine._id)}>
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                  </button>
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
