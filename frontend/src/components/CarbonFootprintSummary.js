import React, { useState } from 'react';
import EmissionsCalculator from './EmissionsCalculator';

function CarbonFootprintSummary() {
  const [totalEmissions, setTotalEmissions] = useState(0);

  return (
    <section className="carbon-summary">
      <h2>Carbon Footprint Summary</h2>
      <div className="emissions-display">
        <div className="total-emissions">
          <h3>Today's Total</h3>
          <p className="emission-value">{totalEmissions.toFixed(2)} kg CO2e</p>
        </div>
        {/* Pass setTotalEmissions to EmissionsCalculator */}
        <EmissionsCalculator setTotalEmissions={setTotalEmissions} />
      </div>
    </section>
  );
}

export default CarbonFootprintSummary;

