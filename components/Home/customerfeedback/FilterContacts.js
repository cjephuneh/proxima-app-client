import React from 'react'

function FilterContacts() {
  return (
    <div className='flex flex-row space-x-1'>
        <div className="bg-gray-200 p-1 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1 className='text-sm'>Finances</h1>
        </div>
        <div className="bg-gray-200 p-1 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
        <h1 className='text-sm'>Finances</h1>
        </div>
    </div>
  )
}

export default FilterContacts