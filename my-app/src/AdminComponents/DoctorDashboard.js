import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorForm from './DoctorForm';
import DoctorList from './DoctorList';
import AdminNavbar from './AdminNavbar';

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Fetch doctors when the component loads
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get('http://localhost:8080/doctors') // Fetch all doctors from the backend
      .then(response => {
        setDoctors(response.data); // Update the state with the list of doctors
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };

  const handleDoctorSaved = () => {
    fetchDoctors(); // Fetch updated list of doctors after saving
    setEditingDoctorId(null); // Reset editing state
    setIsFormVisible(false); // Hide form
  };

  const handleEdit = (id) => {
    setEditingDoctorId(id); // Set the doctor ID to edit
    setIsFormVisible(true); // Show the form for editing
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/doctors/${id}`) // Delete the doctor
      .then(() => {
        setDoctors(doctors.filter(doctor => doctor._id !== id)); // Remove the deleted doctor from the list
      })
      .catch(error => {
        console.error('Error deleting doctor:', error);
      });
  };

  return (
    <>
   <AdminNavbar/>
    <div className="container">
      <h1>Doctor Management Dashboard</h1>
      <div className="mt-4">
        <button className="btn btn-success" onClick={() => setIsFormVisible(true)}>
          Add Doctor
        </button>
      </div>

      {isFormVisible && (
        <div className="mt-4">
          <DoctorForm
            doctorId={editingDoctorId} // Pass the doctor ID if editing
            onDoctorSaved={handleDoctorSaved} // Handle save success
            onCancel={() => {
              setEditingDoctorId(null); // Reset editing
              setIsFormVisible(false); // Hide form
            }}
          />
        </div>
      )}

      <div className="mt-4">
        <DoctorList
          doctors={doctors} // Pass the list of doctors
          onEdit={handleEdit} // Handle editing
          onDelete={handleDelete} // Handle deleting
        />
      </div>
    </div>
    </>
  );
};

export default DoctorDashboard;
