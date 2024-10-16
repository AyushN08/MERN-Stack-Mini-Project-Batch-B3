import React, { useState } from "react";
import "./AddVaccine.css"; 

export default function AddVaccine({ addVaccine }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [ageLimit, setAgeLimit] = useState(""); 
  const [govtPrice, setGovtPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !desc || !ageLimit || !govtPrice) {
      alert("Please fill out all the fields.");
      return;
    }
    addVaccine(name, desc, ageLimit, govtPrice);
    setName("");
    setDesc("");
    setAgeLimit(""); 
    setGovtPrice("");
  };

  return (
    <div className="add-vaccine-container">
      <h3 className="form-title">Add a Vaccine</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="vaccineName" className="form-label">
            Vaccine Name
          </label>
          <input
            type="text"
            className="form-control"
            id="vaccineName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter vaccine name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vaccineDesc" className="form-label">
            Vaccine Description
          </label>
          <input
            type="text"
            className="form-control"
            id="vaccineDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter vaccine description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vaccineAgeLimit" className="form-label">
            Age Limit
          </label>
          <input
            type="text"
            className="form-control"
            id="vaccineAgeLimit"
            value={ageLimit}
            onChange={(e) => setAgeLimit(e.target.value)}
            placeholder="Enter age limit (e.g., 0-1 month, 6 weeks - 6 years)"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="govtPrice" className="form-label">
            Government Price (₹)
          </label>
          <input
            type="number"
            className="form-control"
            id="govtPrice"
            value={govtPrice}
            onChange={(e) => setGovtPrice(e.target.value)}
            placeholder="Enter government price"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Vaccine
        </button>
      </form>
    </div>
  );
}
