import { FiUsers } from 'react-icons/fi'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
  };

const labels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Number of clients',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })), // Replace with your actual data
        backgroundColor: '#FF6384', // Replace with your preferred color
      },
    ],
  };

  
export default function PredictedUniqueClients(){
    return (
        <div className="bg-white rounded p-8 w-3/5 space-y-6 h-96">
            <h2 className="font-semibold text-2xl">Unique Clients</h2>

            <div className="flex gap-12 items-center">
                <div>
                    <div>
                        <div className='flex gap-4 items-center'>
                            <FiUsers size={50} color='gray' />
                            <p className='text-6xl'>208</p>
                        </div>
                        <p className='text-gray-500 text-xs text-center'>+0.5% more than last month</p>
                    </div>
                </div>

                <div className='flex-1'>
                    <div className='mx-auto w-fit flex gap-1'>
                        <button className='px-4 py-1 bg-gray-200 rounded-full'>Daily</button>
                        <button className='px-4 py-1 bg-gray-200 rounded-full'>Weekly</button>
                        <button className='px-4 py-1 bg-[#53B4B0] rounded-full text-white font-semibold'>Yearly</button>
                    </div>
                    <div className='h-64 flex-1'>
                        <Bar data={data} options={options} />
                    </div>
                </div>
            </div>
        </div>
    )
}