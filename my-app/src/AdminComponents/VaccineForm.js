import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VaccineForm = ({ vaccineId, onVaccineSaved, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ageLimit: '',
    govtPrice: ''
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (vaccineId) {
      const trimmedVaccineId = vaccineId.trim(); 
      axios.get(`http://localhost:8080/vaccines/${trimmedVaccineId}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          const errorMessage = error.response ? error.response.data : 'Unknown error occurred';
          setApiError('Error fetching vaccine details. Please check the ID.');
        });
    }
  }, [vaccineId]);

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
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.ageLimit) newErrors.ageLimit = 'Age limit is required.';
    if (!formData.govtPrice || formData.govtPrice <= 0) newErrors.govtPrice = 'Government price must be a positive number.';
    
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
      const request = vaccineId 
        ? axios.put(`http://localhost:8080/vaccines/${vaccineId}`, {
            ...formData,
            ageLimit: Number(formData.ageLimit),
            govtPrice: Number(formData.govtPrice)
          }) 
        : axios.post('http://localhost:8080/vaccines', {
            ...formData,
            ageLimit: Number(formData.ageLimit),
            govtPrice: Number(formData.govtPrice)
          });

      const response = await request;

      // Pass the newly saved or edited vaccine back to the parent
      onVaccineSaved(response.data); 

      // Reset form after saving
      setFormData({
        name: '',
        description: '',
        ageLimit: '',
        govtPrice: ''
      });
      setApiError('');
    } catch (error) {
      const errorMessage = error.response ? error.response.data : 'Error saving vaccine. Please try again.';
      setApiError(errorMessage);
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
        <label>Description</label>
        <input
          type="text"
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        {errors.description && <div className="invalid-feedback">{errors.description}</div>}
      </div>
      
      <div className="form-group">
        <label>Age Limit</label>
        <input
          type="number"
          className={`form-control ${errors.ageLimit ? 'is-invalid' : ''}`}
          name="ageLimit"
          value={formData.ageLimit}
          onChange={handleChange}
          required
        />
        {errors.ageLimit && <div className="invalid-feedback">{errors.ageLimit}</div>}
      </div>
      
      <div className="form-group">
        <label>Government Price</label>
        <input
          type="number"
          className={`form-control ${errors.govtPrice ? 'is-invalid' : ''}`}
          name="govtPrice"
          value={formData.govtPrice}
          onChange={handleChange}
          required
        />
        {errors.govtPrice && <div className="invalid-feedback">{errors.govtPrice}</div>}
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

export default VaccineForm;
