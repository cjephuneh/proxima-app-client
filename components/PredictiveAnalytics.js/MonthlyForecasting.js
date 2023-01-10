export default MonthlyForecasting


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
import * as faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',  'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 8999, 5643, 6213, 9083, 5332, 2345],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [3000, 5000, 7000, 1000, 3400, 6700, 2594, 4556, 3445, 1234, 4556, 1236],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function MonthlyForecasting() {
  return <Bar options={options} data={data} />;
}
