import React, { useState, useEffect } from 'react';
import { useCarbon } from '../hooks/useCarbon';
import EmissionsCalculator from './EmissionsCalculator';

function CarbonFootprintSummary() {
  const [totalEmissions, setTotalEmissions] = useState(0);
  const { calculateEstimate } = useCarbon();

  useEffect(() => {
    // Calculating initial emissions example
    const calculateInitialEmissions = async () => {
      try {
        const electricityData = {
          electricity_unit: 'kwh',
          electricity_value: 100,
          country: 'us',
          state: 'ca'
        };
        const result = await calculateEstimate('electricity', electricityData);
        setTotalEmissions(result.carbon_kg);
      } catch (err) {
        console.error('Error calculating initial emissions:', err);
      }
    };

    calculateInitialEmissions();
  }, [calculateEstimate]);

  return (
    <section className="carbon-summary">
      <h2>Carbon Footprint Summary</h2>
      <div className="emissions-display">
        <div className="total-emissions">
          <h3>Today's Total</h3>
          <p className="emission-value">{totalEmissions.toFixed(2)} kg CO2e</p>
        </div>
        <EmissionsCalculator />
      </div>
    </section>
  );
}

export default CarbonFootprintSummary;
