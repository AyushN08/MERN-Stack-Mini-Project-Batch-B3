import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      {deleteError && <div className="alert alert-danger">{deleteError}</div>}

      {doctors.length === 0 ? (
        <p>No doctors available. Add a doctor to get started.</p>
      ) : (
        <table className="table table-striped table-bordered">
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
            {doctors.map(doctor => (
              <tr key={doctor._id}>
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phone}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => onEdit(doctor._id)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(doctor._id)}>Delete</button>
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
