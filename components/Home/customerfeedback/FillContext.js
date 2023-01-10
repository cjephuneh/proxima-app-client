import React, { useState } from 'react'

function FillContext() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const { email, password } = formData;
    
      //Handling change in form data
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='shadow-xl p-3'>
        <h1 className='text-center text-lg text-gray-600 py-2 pb-4'>Set Up Surver Context</h1>
        <div className='flex flex-row space-x-2'>
        <div className="mb-6">
            <label
            //for="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
            Topic
            </label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="10"
            className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            value={email}
            onChange={onChange}
            />
        </div>
        <div className="mb-6">
            <label
            //for="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
            Number of Questions
            </label>
            <input
            type="email"
            name="email"
            id="email"
            placeholder="you@email.com"
            className="py-2 p-2 border bg-gray-100 border-gray-400 rounded-lg mt-1 w-full focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            value={email}
            onChange={onChange}
            />
        </div>
        </div>

        <div className="mb-6">
            <label
            //for="email"
            className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
            Survey Context 
            </label>
            <textarea rows = "10" cols = "58" name = "description" className='border border-gray-600 rounded-md'>
            Enter details here...
         </textarea>
        </div>
    </div>
  )
}

export default FillContext