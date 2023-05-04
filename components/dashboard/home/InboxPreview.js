import Link from 'next/link'
import { CiMail } from 'react-icons/ci'

export default function InboxPreview({showInboxPreview}){
    const mails = [
        {
            title: 'New survey response',
            preview: '25 responses so far',
            time: '12:45 PM'
        },
        {
            title: 'New issue raised',
            preview: 'Juma Aindu just raised an issue',
            time: '6:45 PM'
        },
        {
            title: 'New survey response',
            preview: '25 responses so far',
            time: '12:45 PM'
        },
    ]
    return (
        <div className={showInboxPreview ? 'absolute z-30 right-32 top-16 w-80 h-auto p-2 rounded-md bg-white shadow-lg' : 'hidden'}>
            {
                mails.map((mail, i) => (
                    <div key={i} className='flex border mt-2 space-x-2 p-2 rounded'>
                        <CiMail size={24} />
                        <div>
                            <h5 className='font-semibold'>{mail.title}</h5>
                            <p className='text-gray-500 text-sm'>{mail.preview}</p>
                            <p className='text-gray-700'>{mail.time}</p>
                        </div>
                    </div>
                ))
            }

            <div className='mt-3 flex items-center justify-center'>
                <Link href={'/dashboard/inbox'} className='text-[#4798F6] underline'>View more...</Link>
            </div>
        </div>
    )
}