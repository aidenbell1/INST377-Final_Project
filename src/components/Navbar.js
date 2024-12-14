import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Carbon Tracker</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/help">Help</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
