import React, { useState } from 'react'
import SearchModal from '../analytics/SearchModal'

// This filtering will be dynamic to each particular organization as what will happen is that it will be fetched from most popular topics and least popular topics.
function AnalyticsFilter() {

    const [click, setClick] = useState(false)

    const clickFilter = () => {
        if (click == true){
            setClick == false;
        } else {
            setClick == true
        }
    }

    const removeFilter = () => {
        setClick == false;
    }
  return (
    <div>
        <SearchModal />

        <div className="shadow-md p-4 text-center rounded-md "> 

        {click == true ? (
            <>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md" onClick={clickFilter}>
            <h1>Finances</h1>
        </div>
            </>

        ) : (
            <>
        <div className="bg-gray-400 p-2 text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md" onClick={clickFilter}>
            <h1>Finances</h1>
        </div>
            </>
        )}

        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Opening hours</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Refunds</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Promotions</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Sales Team</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Offers</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Complaints</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Appreciation</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Internship</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Investors</h1>
        </div>
        <div className="bg-gray-200 p-2 text-gray-400 hover:text-gray-600 cursor-pointer shadow-sm hover:scale-105 transform transition duration-300 ease-out m-1 my-2 rounded-md">
            <h1>Marketing</h1>
        </div>
        </div>
    </div>
  )
}

export default AnalyticsFilter