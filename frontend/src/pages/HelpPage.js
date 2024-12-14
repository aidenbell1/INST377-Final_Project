import React from 'react';

function HelpPage() {
  return (
    <div className="help-page">
      <section className="logging-activities">
        <h2>Logging Activities</h2>
        <div className="input-instructions">
          <h3>How to Input Data</h3>
          <p>Step-by-step guide for logging your activities...</p>
        </div>
      </section>

      <section className="carbon-metrics">
        <h2>Understanding Carbon Metrics</h2>
        <div className="footprint-guide">
          <h3>Carbon Footprint Guide</h3>
          <p>Learn how to interpret your carbon metrics...</p>
        </div>
      </section>

      <section className="tracking">
        <h2>Tracking Progress</h2>
        <div className="monitor-instructions">
          <h3>Monitor Your Impact</h3>
          <p>Guide to tracking your progress...</p>
        </div>
        <div className="goal-setting">
          <h3>Setting Goals</h3>
          <p>How to set and achieve your carbon reduction goals...</p>
        </div>
      </section>
    </div>
  );
}

export default HelpPage;
