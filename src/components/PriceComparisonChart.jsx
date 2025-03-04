import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PriceComparisonChart = ({ actualPrices, predictedPrices }) => {
  const data = {
    labels: actualPrices.map((_, index) => `Property ${index + 1}`),
    datasets: [
      {
        label: 'Actual Price',
        data: actualPrices,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Predicted Price',
        data: predictedPrices,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Actual vs Predicted Property Prices',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price ($)',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PriceComparisonChart;
