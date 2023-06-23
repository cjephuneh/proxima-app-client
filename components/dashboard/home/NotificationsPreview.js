import Link from 'next/link'
import { BsBell } from 'react-icons/bs'

export default function NotificationsPreview({showNotificationsPreview}){
    return (
        <div className={showNotificationsPreview ? 'absolute z-30 right-48 top-16 w-80 h-auto p-2 rounded-md bg-white shadow-lg' : 'hidden'}>

            <div className='flex border mt-2 space-x-2 p-2 rounded'>
                <BsBell size={24} />
                <div>
                    <h5 className='font-semibold'> </h5>
                    <p className='text-gray-500 text-sm'></p>
                    <p className='text-gray-700'></p>
                </div>
            </div>

            <div className='mt-3 flex items-center justify-center'>
                <Link href={'/dashboard/notifications'} className='text-[#4798F6] underline'>Show all...</Link>
            </div>
        </div>
    )
}