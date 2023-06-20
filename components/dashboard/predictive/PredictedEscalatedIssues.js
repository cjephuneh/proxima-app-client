import React from 'react'

export default function PredictedEscalatedIssues() {
  return (
    <div className='w-2/5 h-fit bg-white rounded p-8 flex justify-between'>
        <div className='space-y-5'>
          <div className='space-y-2'>
            <h2 className='font-semibold text-3xl'>Escalated Issues </h2>
            <p className='text-gray-500'>Issues that require human agents attention</p>
          </div>
            <h2 className='text-6xl font-semibold'>320</h2>
        </div>

        <div className="space-y-8 mx-6 flex flex-col">
            <select className="bg-transparent border px-2 py-1 rounded self-end">
                <option value="mobile">Mobile app</option>
                <option value="website">Website</option>
            </select>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: `
                radial-gradient(closest-side, white 89%, transparent 90% 100%),
                conic-gradient(#50E471 
 

                    12%, #FFE5D3 0)
                `
            
            }}>
                <p className="bg-[#50E471] text-white h-[100px] w-[100px] rounded-full flex items-center justify-center">
                    <span className="font-semibold text-2xl">
                        12%
                    </span></p>
            </div>
        </div>
    </div>
  )
}

