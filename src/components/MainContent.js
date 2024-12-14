import React from 'react';
import CarbonFootprintSummary from './CarbonFootprintSummary';
import DailyTips from './DailyTips';
import ProgressGraphs from './ProgressGraphs';

function MainContent() {
  return (
    <main className="main-content">
      <div className="content-grid">
        <CarbonFootprintSummary />
        <DailyTips />
        <ProgressGraphs />
      </div>
    </main>
  );
}

export default MainContent;