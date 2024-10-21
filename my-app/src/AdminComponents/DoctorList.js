import React, { useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import "./DoctorList.css";

const DoctorList = ({ doctors, onEdit, onDelete }) => {
  const [deleteError, setDeleteError] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      axios.delete(`http://localhost:8080/doctors/${id}`)
        .then(() => {
          onDelete(id);
          setDeleteError('');
        })
        .catch(() => {
          setDeleteError('Error deleting doctor. Please try again.');
        });
    }
  };

  return (
    <div className="doctor-list-container">
      {deleteError && <div className="alert alert-danger">{deleteError}</div>}

      {doctors.length === 0 ? (
        <p className="no-doctors-message">No doctors available. Add a doctor to get started.</p>
      ) : (
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phone}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => onEdit(doctor._id)}
                  >
                    <FaEdit className="icon" /> Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(doctor._id)}
                  >
                    <FaTrashAlt className="icon" /> Delete
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

export default DoctorList;
