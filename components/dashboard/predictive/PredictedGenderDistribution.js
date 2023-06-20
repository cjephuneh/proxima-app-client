import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(ArcElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};

const labels = ['Male', 'Female'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: ['#59A7FF', '#2BD8C2'],
    },
  ],
};

export default function PredictedGenderDistribution() {
  return (
    <div className="w-2/5 h-96 p-8 rounded bg-white space-y-6">
        <h2 className='font-semibold text-2xl'>Gender Distribution</h2>
        <div className='overflow-hidden h-64'>
            <Pie options={options} data={data} />
        </div>
    </div>
  );
}
