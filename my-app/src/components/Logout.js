import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token and any user data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUserEmail');
    
    // Redirect the user to the login page
    navigate('/signin');
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
