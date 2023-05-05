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
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    //   title: {
    //     display: true,
    //     text: 'Chart.js Horizontal Bar Chart',
    //   },
    },
  };
  
  const labels = ['20-25 year olds', '26-31 year olds', '32-36 year olds', '37-41 year olds', '42-46 year olds'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Number of clients',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#FF3A29',
      },
    ],
  };

export default function KnowYourClients(){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <div className="flex justify-between items-center">
                <h5 className="font-semibold text-xl">Know your clients</h5>
                <select className="bg-transparent border px-2 py-1">
                    <option value="age">By age</option>
                    <option value="gender">By gender</option>
                </select>
            </div>
            <div className='h-96 mt-4'>
                <Bar options={options} data={data} />
            </div>
        </div>
    )
}
