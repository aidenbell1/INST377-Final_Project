import React from 'react';

function CarbonFootprintSummary() {
  // Placeholder data for now, will be replaced with API data
  const emissionsData = {
    daily: 5.2,
    transport: 2.3,
    energy: 1.8,
    food: 1.1
  };

  return (
    <section className="carbon-summary">
      <h2>Carbon Footprint Summary</h2>
      <div className="emissions-display">
        <div className="total-emissions">
          <h3>Today's Total</h3>
          <p className="emission-value">{emissionsData.daily} kg CO2e</p>
        </div>
        <div className="emissions-breakdown">
          <div className="emission-item">
            <span>Transport</span>
            <span>{emissionsData.transport} kg CO2e</span>
          </div>
          <div className="emission-item">
            <span>Energy</span>
            <span>{emissionsData.energy} kg CO2e</span>
          </div>
          <div className="emission-item">
            <span>Food</span>
            <span>{emissionsData.food} kg CO2e</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarbonFootprintSummary;
