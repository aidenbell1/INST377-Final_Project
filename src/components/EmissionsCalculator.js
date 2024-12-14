import React, { useState } from 'react';
import { useCarbon } from '../hooks/useCarbon';

function EmissionsCalculator() {
  const { calculateEstimate, loading, error } = useCarbon();
  const [results, setResults] = useState(null);

  // Function to calculate electricity emissions
  const calculateElectricity = async () => {
    try {
      const data = {
        electricity_unit: 'kwh',
        electricity_value: 100,
        country: 'us',
        state: 'ca'
      };
      const result = await calculateEstimate('electricity', data);
      setResults(result);
    } catch (err) {
      console.error('Error calculating electricity:', err);
    }
  };

  // Function to calculate flight emissions
  const calculateFlight = async () => {
    try {
      const data = {
        passengers: 2,
        legs: [
          { departure_airport: 'SFO', destination_airport: 'LAX' },
          { departure_airport: 'LAX', destination_airport: 'JFK' }
        ]
      };
      const result = await calculateEstimate('flight', data);
      setResults(result);
    } catch (err) {
      console.error('Error calculating flight:', err);
    }
  };

  return (
    <div className="emissions-calculator">
      {loading && <p>Calculating...</p>}
      {error && <p className="error">Error: {error}</p>}
      {results && (
        <div className="results">
          <h3>Results:</h3>
          <p>Carbon (kg): {results.carbon_kg}</p>
          <p>Carbon (lb): {results.carbon_lb}</p>
          <p>Estimated at: {results.estimated_at}</p>
        </div>
      )}
      <button onClick={calculateElectricity}>Calculate Electricity</button>
      <button onClick={calculateFlight}>Calculate Flight</button>
    </div>
  );
}

export default EmissionsCalculator;