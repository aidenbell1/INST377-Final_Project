import React from 'react';

function HelpPage() {
  return (
    <div className="fade-in-page"> {/* Apply the fade-in animation */}
      <div className="help-page">
        <section className="carbon-metrics">
          <h2>Understanding Carbon Metrics</h2>
          <div className="footprint-guide">
            <p>
              Your carbon metrics represent the impact of your actions on the environment. In
              the Carbon Tracker app, these metrics are broken down into categories like energy usage,
              transportation, and lifestyle choices. By tracking these metrics, you can gain insight
              into your largest sources of emissions and find opportunities for improvement.
            </p>
            <p>
              Here’s what each metric represents:
            </p>
            <ul>
              <li><strong>Carbon (kg CO2e):</strong> The total amount of carbon dioxide equivalent (CO2e)
                emitted based on your activities, measured in kilograms.</li>
              <li><strong>Carbon (lb CO2e):</strong> The same metric, but converted to pounds.</li>
              <li><strong>Estimated at:</strong> The timestamp indicating when the estimate was made.</li>
            </ul>
            <p>
              By understanding these numbers, you can take actionable steps to reduce your carbon
              footprint and make more sustainable choices.
            </p>
          </div>
        </section>

        <section className="tracking">
          <h2>Tracking Progress</h2>
          <div className="monitor-instructions">
            <h3>How to Monitor Your Impact</h3>
            <p>
              The first step to reducing your carbon footprint is knowing where you stand. Regular
              monitoring of your carbon emissions helps you track progress and identify areas that
              need improvement. The Carbon Tracker app allows you to view your emissions for various
              activities, from electricity usage to travel, and gives you a comprehensive view of your
              overall impact.
            </p>
            <p>
              You can monitor your progress by regularly checking your carbon emissions report within
              the app. The app will display your emissions data over time and offer insights on where
              you can make eco-friendly changes.
            </p>
            <h3>Progress Graphs</h3>
            <p>
              Use the graphs and charts available in the app to visualize your emissions data over
              time. This allows you to track changes, see improvements, and stay motivated as you
              work towards reducing your carbon footprint.
            </p>
          </div>
          <div className="goal-setting">
            <h3>Setting and Achieving Goals</h3>
            <p>
              One of the most effective ways to reduce your carbon footprint is by setting clear,
              measurable goals. In the Carbon Tracker app, you can set personalized carbon reduction
              targets based on your current emissions and desired outcomes.
            </p>
            <p>
              Start by setting a realistic goal based on the categories of emissions you want to focus
              on. Whether you want to reduce your electricity consumption or travel less, setting
              specific, measurable targets makes it easier to track your progress.
            </p>
            <p>
              Example goals include:
            </p>
            <ul>
              <li>Reduce electricity usage by 10% over the next 6 months.</li>
              <li>Cut transportation emissions by 15% by using public transport more often.</li>
              <li>Decrease overall carbon emissions by 20% within a year.</li>
            </ul>
            <p>
              After setting goals, review them regularly to ensure you're on track. The app allows you
              to adjust your goals if needed and offers suggestions for further reducing your emissions
              based on your progress.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HelpPage;
