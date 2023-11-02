import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate('/create');
  }

  const handleDonationPage = () => {
    navigate('/');
  }

  return (
    <div className="nav-bar">
      <span>ByteCoin</span>
      <div className="button-container">
        <button onClick={handleDonationPage}>Home</button>
        <button onClick={handleCreatePage}>Create</button>
      </div>
    </div>
  );
}

export default NavBar;
