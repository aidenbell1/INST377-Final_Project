import React, { useEffect, useState } from 'react';
import { DAILY_TIPS } from '../constants/tips.js'; // Import the tips array

function DailyTips() {
  const [randomTips, setRandomTips] = useState([]);

  // Function to get 3 random tips
  const getRandomTips = () => {
    // Shuffle the DAILY_TIPS array and select the first 3 items
    const shuffledTips = DAILY_TIPS.sort(() => Math.random() - 0.5);
    return shuffledTips.slice(0, 3); // Get the first 3 shuffled tips
  };

  useEffect(() => {
    setRandomTips(getRandomTips());
  }, []); // Run once when the component mounts

  return (
    <section className="daily-tips">
      <h2>Daily Tips</h2>
      <div className="recommendations">
        <h3>Recommendations</h3>
        <ul>
          {randomTips.map((tip, index) => (
            <li key={tip.id}>{tip.tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DailyTips;
