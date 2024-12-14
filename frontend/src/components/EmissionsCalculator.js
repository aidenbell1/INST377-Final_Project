import React, { useState } from 'react';
import { useCarbon } from '../hooks/useCarbon';

function EmissionsCalculator({ setTotalEmissions }) {
  const { calculateEstimate, loading, error } = useCarbon();
  const [results, setResults] = useState(null);

  const handleCalculation = async (type, data) => {
    try {
      const result = await calculateEstimate(type, data);
      setResults(result);  // Set the results for display
      setTotalEmissions(result.carbon_kg);  // Update total emissions in the parent component
    } catch (err) {
      console.error(`Error calculating ${type}:`, err);
    }
  };

  return (
    <div className="emissions-calculator">
      <h1>Sustainability and Carbon Footprint Tracker</h1>
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
      <div className="buttons">
        <button
          onClick={() =>
            handleCalculation('electricity', {
              electricity_unit: 'kwh',
              electricity_value: 100,
              country: 'us',
              state: 'ca',
            })
          }
        >
          Calculate Electricity
        </button>
        <button
          onClick={() =>
            handleCalculation('flight', {
              passengers: 2,
              legs: [
                { departure_airport: 'SFO', destination_airport: 'LAX' },
                { departure_airport: 'LAX', destination_airport: 'JFK' },
              ],
            })
          }
        >
          Calculate Flight
        </button>
        <button
          onClick={() =>
            handleCalculation('shipping', {
              weight_value: 100,
              weight_unit: 'kg',
              distance_value: 500,
              distance_unit: 'mi',
              transport_method: 'ship',
            })
          }
        >
          Calculate Shipping
        </button>
        <button
          onClick={() =>
            handleCalculation('vehicle', {
              distance_unit: 'mi',
              distance_value: 50,
              vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9',
            })
          }
        >
          Calculate Vehicle
        </button>
      </div>
    </div>
  );
}

export default EmissionsCalculator;
