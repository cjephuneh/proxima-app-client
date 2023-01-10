import React from 'react'
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";

function HighlightsKeys() {
  return (
    <div className='shadow-md bg-gray-50 rounded-lg border border-gray-100'>
        <div className='flex flex-row justify-between p-3'>
            <p className='text-xl '>
            <span className="underline decoration-black decoration-3">
              $10 {" "}
            </span>
            M
            </p>
            <div className="sm:object-cover object-center relative h-[40px] w-[40px]">
        <Image
          src={coverpage}
          layout="fill"
          objectFit="cover"
          className="rounded-3xl shadow-lg"
        />
      </div>
        </div>
        <p className='font-bold text-lg py-3 pl-3'>
            Amount
        </p>
        <div className='flex flex-row justify-center space-x-4 py-3'>
        <div className='text-lg bg-green-100 rounded-xl'>
        <p className='text-green-400 p-2'>+50% Q/Q</p>

            </div>
            <div className='text-lg bg-green-100 rounded-xl'>
                <p className='text-green-400 p-2'>+50% Q/Q</p>

            </div>
        </div>
    </div>
  )
}

export default HighlightsKeys