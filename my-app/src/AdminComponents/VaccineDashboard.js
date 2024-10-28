import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VaccineForm from './VaccineForm';
import VaccineList from './VaccineList';
import AdminNavbar from './AdminNavbar';
import { FaPlus, FaSyringe } from 'react-icons/fa';
import "./VaccineDashboard.css";

const VaccineDashboard = () => {
  const [vaccines, setVaccines] = useState([]);
  const [editingVaccineId, setEditingVaccineId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchVaccines();
  }, []);

  // Fetch all vaccines from the server
  const fetchVaccines = () => {
    axios.get('http://localhost:8080/vaccines')
      .then(response => {
        setVaccines(response.data);
      })
      .catch(error => {
        console.error('Error fetching vaccines:', error);
      });
  };

  // Handle vaccine addition or editing
  const handleVaccineSaved = (newVaccine) => {
    if (editingVaccineId) {
      // Update an existing vaccine in the state
      setVaccines(vaccines.map(vaccine =>
        vaccine._id === newVaccine._id ? newVaccine : vaccine
      ));
    } else {
      // Add a new vaccine to the state
      setVaccines([...vaccines, newVaccine]);
    }

    setEditingVaccineId(null);
    setIsFormVisible(false);
  };

  const handleEdit = (id) => {
    setEditingVaccineId(id);
    setIsFormVisible(true);
  };

  // Handle deletion and update the state without refreshing
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/vaccines/${id}`)
      .then(() => {
        setVaccines(vaccines.filter(vaccine => vaccine._id !== id));
      })
      .catch(error => {
        console.error('Error deleting vaccine:', error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container vaccine-dashboard">
        <h1 className="dashboard-heading">
          <FaSyringe className="dashboard-icon" /> Vaccine Management Dashboard
        </h1>
        <div className="add-btn-container mt-4">
          <button className="btn btn-primary" onClick={() => setIsFormVisible(true)}>
            <FaPlus className="icon" /> Add Vaccine
          </button>
        </div>

        {isFormVisible && (
          <div className="mt-4 form-container">
            <VaccineForm
              vaccineId={editingVaccineId}
              onVaccineSaved={handleVaccineSaved} // Pass the new or edited vaccine back to the parent component
              onCancel={() => {
                setEditingVaccineId(null);
                setIsFormVisible(false);
              }}
            />
          </div>
        )}

        <div className="mt-4 list-container">
          <VaccineList
            vaccines={vaccines}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
};

export default VaccineDashboard;
