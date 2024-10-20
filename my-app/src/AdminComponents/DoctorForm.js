import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorForm = ({ doctorId, onDoctorSaved, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (doctorId) {
      axios.get(`http://localhost:8080/doctors/${doctorId}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(() => {
          setApiError('Error fetching doctor details. Please check the ID.');
        });
    }
  }, [doctorId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Phone number must be at least 10 digits.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const request = doctorId 
        ? axios.put(`http://localhost:8080/doctors/${doctorId}`, formData)
        : axios.post('http://localhost:8080/doctors', formData);

      await request;
      onDoctorSaved(); 
      setFormData({ name: '', specialization: '', email: '', phone: '' });
      setApiError('');
    } catch (error) {
      setApiError('Error saving doctor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {apiError && <div className="alert alert-danger">{apiError}</div>}

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="form-group">
        <label>Specialization</label>
        <input
          type="text"
          className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-primary w-50 mr-2" type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
        <button className="btn btn-secondary w-40" onClick={onCancel} type="button">Cancel</button>
      </div>
    </form>
  );
};

export default DoctorForm;
   