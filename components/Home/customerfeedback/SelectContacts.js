import React from 'react'
import { Checkbox } from '@nextui-org/react';
import FilterContacts from './FilterContacts';

function SelectContacts() {
  return (
    <div className='shadow-xl'>
      <div className='flex flex-col space-x-2'>
        <div className='flex flex-row space-x-2 justify-between pr-4 shadow-md pl-2'>
        <h1 className='text-center text-lg text-gray-600 py-2 pb-4'>Survey Respondents</h1>
        <h1 className='text-center text-lg text-gray-600 py-2 pb-4'>Select All</h1>
        </div>
        <FilterContacts />
      </div>
        <div className='grid grid-cols-4 shadow-md p-2'>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600' color="success" labelColor="success">0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600' color="success">0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>
        <Checkbox defaultSelected={true} size="sm"><h1 className='text-sm text-gray-600'>0793681840</h1></Checkbox>

        </div>
    </div>
  )
}

export default SelectContacts