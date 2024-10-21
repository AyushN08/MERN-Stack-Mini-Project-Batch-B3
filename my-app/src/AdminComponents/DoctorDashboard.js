import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorForm from './DoctorForm';
import DoctorList from './DoctorList';
import AdminNavbar from './AdminNavbar';
import './DoctorDashboard.css'; 
import { FaUserPlus } from 'react-icons/fa'; 
import { FaUserMd } from 'react-icons/fa'; 

const DoctorDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = () => {
    axios.get('http://localhost:8080/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };

  const handleDoctorSaved = () => {
    fetchDoctors();
    setEditingDoctorId(null);
    setIsFormVisible(false);
  };

  const handleEdit = (id) => {
    setEditingDoctorId(id);
    setIsFormVisible(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/doctors/${id}`)
      .then(() => {
        setDoctors(doctors.filter(doctor => doctor._id !== id));
      })
      .catch(error => {
        console.error('Error deleting doctor:', error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title"><FaUserMd /> Doctor Management Dashboard</h1>
        <div className="add-doctor-container">
          <button className="btn-add-doctor" onClick={() => setIsFormVisible(true)}>
            <FaUserPlus className="icon" /> Add Doctor
          </button>
        </div>

        {isFormVisible && (
          <div className="form-container">
            <DoctorForm
              doctorId={editingDoctorId}
              onDoctorSaved={handleDoctorSaved}
              onCancel={() => {
                setEditingDoctorId(null);
                setIsFormVisible(false);
              }}
            />
          </div>
        )}

        <div className="doctor-list-container">
          <DoctorList
            doctors={doctors}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
