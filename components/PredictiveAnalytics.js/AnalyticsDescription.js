import React from 'react'

function AnalyticsDescription() {
  return (
    <>
    <h1 className='text-center text-lg text-gray-600'>Error rates</h1>
    <div className='p-4 shadow-md divide-x divide-gray-500 h-[80px] flex flex-row space-x-2'>
        <p className='text-red-400  text-xl p-4 '>-4%</p>
        <p className='text-green-400  text-xl p-4 '>+4%</p>
        <p className='text-red-400  text-xl p-4 '>-4%</p>
        <p className='text-green-400  text-xl p-4 '>+4%</p>
        <p className='text-red-400  text-xl p-4 '>-4%</p>

    </div>
    </>
  )
}

export default AnalyticsDescription