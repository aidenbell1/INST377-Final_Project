import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ProgressGraphs() {
  // Placeholder data - replace with actual data later
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Carbon Emissions (kg CO2e)',
        data: [50, 45, 40, 35],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Carbon Emissions Over Time'
      }
    }
  };

  return (
    <section className="progress-graphs">
      <h2>Progress Graphs</h2>
      <Line data={data} options={options} />
      <div className="saved-emissions">
        <h3>Emissions Saved</h3>
        <p>15 kg CO2e this week</p>
      </div>
    </section>
  );
}

export default ProgressGraphs;
