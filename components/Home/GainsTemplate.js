import React from 'react'

function GainsTemplate() {
  return (
    <div className='shadow-xl bg-gray-50 rounded-md'>
        <div className='flex flex-row pl-4 justify-left space-x-4'>
            <h1 className='text-lg text-green-500'>Time Warner</h1>

            <div className='bg-blue-200 rounded-md'>
            <h1 className='p-1 text-blue-600'>Entertainment</h1>
            </div>

        </div>

        <div className='flex flex-row justify-between p-4'>
            <div className='flex flex-col space-y-2'>
                <h3>Oppty name</h3>
                <p>Customer 360</p>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3>Oppty name</h3>
                <p>Customer 360</p>
            </div>
            <div className='flex flex-col space-y-2'>
                <h3>Oppty name</h3>
                <p>Customer 360</p>
            </div>

        </div>
    </div>
  )
}

export default GainsTemplate