import React from 'react';
import './App.css';
import CarbonFootprintSummary from './components/CarbonFootprintSummary';
import DailyTips from './components/DailyTips';
import ProgressGraphs from './components/ProgressGraphs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Carbon Footprint Tracker</h1>
      </header>
      <main>
        <CarbonFootprintSummary />
        <DailyTips />
        <ProgressGraphs />
      </main>
    </div>
  );
}

export default App;