import React, { useState } from 'react'



function TrackDatesContext() {

  // Setting state for the values that we want to use
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState()
  const [day, setDay] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  //Handling change in form data
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const fetchsetDateData = () => {}

  return (
    <div className='shadow-sm text-sm p-2 w-[100px] h-[30px]'> 

        <button
          className="py-2 text-sm border bg-gray-100 border-gray-400 rounded-md p-2  w-[100px] h-[30px]  focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        >
          01/12/2022
        </button>

      </div>
  )
}

export default TrackDatesContext