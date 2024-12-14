import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;