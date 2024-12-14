import React from 'react';

function DailyTips() {
  // Placeholder tips for now; replace with dynamic content later
  const tips = [
    "Use public transportation instead of driving",
    "Turn off lights when leaving a room",
    "Reduce meat consumption"
  ];
  return (
    <section className="daily-tips">
      <h2>Daily Tips</h2>
      <div className="recommendations">
        <h3>Recommendations</h3>
        <ul>
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DailyTips;