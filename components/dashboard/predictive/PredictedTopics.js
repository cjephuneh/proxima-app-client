import React from 'react'

export default function PredictedTopics() {
  return (
    <div className='bg-white rounded p-8'>
        <div className='flex justify-between mb-6'>
            <div>
                <h2 className='text-2xl font-semibold'>Topics</h2>
                <p className='text-sm text-gray-500'>Most interacted with topics from clients</p>
            </div>
            <select className="bg-transparent border px-2 py-1 rounded self-end">
                <option value="mobile">Mobile app</option>
                <option value="website">Website</option>
            </select>
        </div>

        <div className='bg-[#F1F8FF] p-3 rounded'>
            {
                [1,2,3,4,5,6,7,8].map((num, i) => (
                    <div key={i} className='mb-3'>
                        <p className='font-semibold'>Issue with maziwa mala 50ML</p>
                        <p className='text-sm text-gray-500'>Some description</p>
                    </div>
                ))
            }    
        </div>
    </div>
  )
}

