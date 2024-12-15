import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Carbon Tracker</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="flicker-btn btn-animated">Home</Link>
        </li>
        <li>
          <Link to="/about" className="flicker-btn btn-animated">About</Link>
        </li>
        <li>
          <Link to="/help" className="flicker-btn btn-animated">Help</Link>
        </li>
        <li>
          <Link to="/goals" className="flicker-btn btn-animated">Goals</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
