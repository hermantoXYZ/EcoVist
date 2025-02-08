import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function EconomicCharts() {
  const gdpData = {
    labels: ['2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'GDP Growth Rate',
      data: [2.8, -3.5, 5.7, 3.2, 2.9],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      fill: false
    }]
  };

  const sectorData = {
    labels: ['Technology', 'Finance', 'Manufacturing', 'Services', 'Agriculture'],
    datasets: [{
      label: 'Sector Distribution',
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(255, 99, 132, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ]
    }]
  };

  const employmentData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Employment Rate',
      data: [63, 65, 68, 70],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }]
  };

  return (
    <div className="charts-container">
      <div className="chart-section">
        <h3>GDP Growth Trend</h3>
        <Line 
          data={gdpData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Annual GDP Growth Rate (%)'
              }
            }
          }}
        />
      </div>

      <div className="chart-section">
        <h3>Economic Sectors Distribution</h3>
        <Doughnut 
          data={sectorData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }}
        />
      </div>

      <div className="chart-section">
        <h3>Employment Trends</h3>
        <Bar 
          data={employmentData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Quarterly Employment Rate (%)'
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default EconomicCharts;