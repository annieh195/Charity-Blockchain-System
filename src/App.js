import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonationPage from './pages/js/DonationPage';
import CreatePage from './pages/js/CreatePage';
import NavBar from './pages/js/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<DonationPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
