import React from 'react';

function CarbonFootprintSummary() {
  // Placeholder data for now; replace with API data later
  const todayEmissions = 5.2;

  return (
    <section className="carbon-summary">
      <h2>Today's Carbon Footprint</h2>
      <p>{todayEmissions} kg CO2e</p>
    </section>
  );
}

export default CarbonFootprintSummary;
