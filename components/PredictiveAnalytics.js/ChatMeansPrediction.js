import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'WhatsApp',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Facebook',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Instagram',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(53, 162, 235)',
    },
    {
      label: 'Instagram',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(53, 102, 215)',
    },
    {
      label: 'Website',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(45, 115, 134)',
    },
    {
      label: 'Application',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgb(53, 102, 105)',
    },
  ],
};

export function ChatMeansPrediction() {
  return <Bar options={options} data={data} />;
}
