import React from 'react';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="header">
        <h1>About Carbon Tracker</h1>
      </section>
      
      <section className="purpose">
        <h2>Our Purpose</h2>
        <p>Help users reduce their environmental impact through daily carbon footprint tracking.</p>
      </section>
      
      <section className="emissions-info">
        <h2>Understanding Carbon Emissions</h2>
        <p>Carbon emissions contribute to climate change through greenhouse gas effects.</p>
      </section>
      
      <section className="habits">
        <h2>Daily Habit Changes</h2>
        <p>Small changes in daily routines can significantly reduce your carbon footprint.</p>
      </section>
    </div>
  );
}

export default AboutPage;
