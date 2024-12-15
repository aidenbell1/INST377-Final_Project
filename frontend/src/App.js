import React from 'react';
import './App.css';
import './components/animations.css'; // Import animations.css for animations
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import GoalsPage from './pages/Goals'; // Import GoalsPage

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* Wrap the Routes in a div with the fade-in animation class */}
        <div className="fade-in-page">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/goals" element={<GoalsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
