import React from 'react'
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import ChatbotCard from '../../Summarization/ChatbotCard';

function CustomerFeedbackContext() {

  <>
      <div className='flex flex-row shadow-md p-2 bg-gray-50 border-b border-gray-400 hover:scale-102 transform transition duration-300 ease-out'>
        <div>
        <div className='flex flex-row space-x-3'>
        <ArrowDownIcon className="md:inline-flex h-8 bg-white rounded-full text-black hover:scale-110 transform transition duration-300 ease-out p-2 cursor-pointer md: mx-2 hover:shadow-md" />
        <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
          0793681840
        </button>
                <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          Sales
        </button>
        <div className="">
            <div className="p-2 bg-gray-200 rounded-md shadow-md text-sm">
            <p>This is the best thing that we can come up with</p>
            </div>
            {/*  */}            
        </div>
        
        </div>
       

        </div>
        
    </div>
  </>
  return (
    <div className='flex flex-row shadow-md p-2 bg-gray-50'>
        <div>
        <div className='flex flex-row space-x-3'>
        <ArrowDownIcon className="md:inline-flex h-8 bg-white rounded-full text-black hover:animate-bounce  p-2 cursor-pointer md: mx-2 hover:shadow-md" />
        <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
          0793681840
        </button>
                <button
          className="py-2  bg-gray-100 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          Sales
        </button>
        </div>
        <div>
        <ChatbotCard />
        </div>

        </div>
        <div>
           {/* Users summary */}
           <div className="p-2">
            <h1 className='text-center text-md text-gray-600'>Users summary</h1>
            {/*  */}
            <div className="p-2 bg-gray-200 rounded-md shadow-md text-sm">
            <p>This is the best thing that we can come up with</p>
            </div>
            {/*  */}
            </div>
            {/* Agents summary */}
            <div className="p-2">
            <h1 className='text-center text-md text-gray-600'>Agents summary</h1>
            {/*  */}
            <div className="p-2 bg-gray-200 rounded-md shadow-md text-sm">
            <p>This is the best thing that we can come up with</p>
            </div>
            {/*  */}            
            </div>
            {/* Conversation summary */}
            <div className="p-2">
            <h1 className='text-center text-md text-gray-600'>Conversation summary</h1>
            {/*  */}
            <div className="p-2 bg-gray-200 rounded-md shadow-md text-sm">
            <p>This is the best thing that we can come up with</p>
            </div>
            {/*  */}            
            </div>
        </div>
    </div>
  )
}

export default CustomerFeedbackContext