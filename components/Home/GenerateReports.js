import React from 'react'
import { DownloadIcon } from "@heroicons/react/solid";
import Image from "next/image";
import coverpage from "../../images/darkbrainlogo.jpg";

function GenerateReports() {
  return (
    <div className='bg-gray-100 shadow-md'>
    <h1 className='text-left text-xl pl-16'>Title</h1>
    <div className='text-center flex flex-row justify-left space-x-12 p-2'>
        {/* Informative Content */}
        <div>
        <h1 className='text-center text-lg'>All chats Report</h1>
        <h1 className='text-center text-lg'>All chats Report</h1>
        <h1 className='text-center text-lg'>All chats Report</h1>
        <h1 className='text-center text-lg'>All chats Report</h1>

        </div>
        <div className="sm:object-cover object-center relative h-[100px] w-[100px]">
        <Image
          src={coverpage}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>
      <div className='pt-16'>
      <DownloadIcon className="md:inline-flex h-8 bg-blue-900 rounded-full text-white hover:animate-bounce  p-2 cursor-pointer md: mx-2 hover:shadow-md" />
      </div>


    </div>

    </div>
  )
}

export default GenerateReports

// All cha