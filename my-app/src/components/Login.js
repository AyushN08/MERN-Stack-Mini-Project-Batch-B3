import React, { useState } from 'react';


const Login = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Login as: ${role}`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="doctor"
                  value="Doctor"
                  checked={role === 'Doctor'}
                  onChange={handleRoleChange}
                  required
                />
                <label className="form-check-label" htmlFor="doctor">
                  Doctor
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="role"
                  id="patient"
                  value="Patient"
                  checked={role === 'Patient'}
                  onChange={handleRoleChange}
                  required
                />
                <label className="form-check-label" htmlFor="patient">
                  Patient
                </label>
              </div>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
