import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VaccineForm from './VaccineForm';
import VaccineList from './VaccineList';
import AdminNavbar from './AdminNavbar';

const VaccineDashboard = () => { // Changed to VaccineDashboard
  const [vaccines, setVaccines] = useState([]);
  const [editingVaccineId, setEditingVaccineId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchVaccines();
  }, []);

  const fetchVaccines = () => {
    axios.get('http://localhost:8080/vaccines')
      .then(response => {
        setVaccines(response.data);
      })
      .catch(error => {
        console.error('Error fetching vaccines:', error);
      });
  };

  const handleVaccineSaved = () => {
    fetchVaccines();
    setEditingVaccineId(null);
    setIsFormVisible(false);
  };

  const handleEdit = (id) => {
    setEditingVaccineId(id);
    setIsFormVisible(true);
  };

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
      <AdminNavbar/>
      <div className="container">
        <h1>Vaccine Management Dashboard</h1>
        <div className="mt-4">
          <button className="btn btn-success" onClick={() => setIsFormVisible(true)}>
            Add Vaccine
          </button>
        </div>

        {isFormVisible && (
          <div className="mt-4">
            <VaccineForm
              vaccineId={editingVaccineId}
              onVaccineSaved={handleVaccineSaved}
              onCancel={() => {
                setEditingVaccineId(null);
                setIsFormVisible(false);
              }}
            />
          </div>
        )}

        <div className="mt-4">
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

export default VaccineDashboard; // Make sure you are exporting the right name
