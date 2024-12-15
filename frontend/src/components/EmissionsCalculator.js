import React, { useState } from 'react';
import { useCarbon } from '../hooks/useCarbon';
import './animations.css'; // Import CSS for blob animations

function EmissionsCalculator({ setTotalEmissions }) {
  const { calculateEstimate, loading, error } = useCarbon();
  const [results, setResults] = useState(null);

  const handleCalculation = async (type, data) => {
    try {
      const result = await calculateEstimate(type, data);
      setResults(result); // Set results for display
      setTotalEmissions(result.carbon_kg); // Update total emissions globally
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
        {/* Blob Button for Calculate Electricity */}
        <button
          className="blob-btn"
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
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>

        {/* Blob Button for Calculate Flight */}
        <button
          className="blob-btn"
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
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>

        {/* Blob Button for Calculate Shipping */}
        <button
          className="blob-btn"
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
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>

        {/* Blob Button for Calculate Vehicle */}
        <button
          className="blob-btn"
          onClick={() =>
            handleCalculation('vehicle', {
              distance_unit: 'mi',
              distance_value: 50,
              vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9',
            })
          }
        >
          Calculate Vehicle
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </div>

      {/* Include the SVG Filter for Gooey Effect */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default EmissionsCalculator;
