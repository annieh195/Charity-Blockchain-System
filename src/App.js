import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonationPage from './pages/js/DonationPage';
import CreatePage from './pages/js/CreatePage';
import Home from './pages/js/Home'; 
import NavBar from './pages/js/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/create" element={<CreatePage />} />
        <Route path="/donation/:charityName" element={<DonationPage />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;