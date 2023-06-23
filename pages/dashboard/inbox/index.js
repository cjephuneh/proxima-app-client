import DashLayout from "@/components/dashboard/DashLayout";
import { CiMail } from "react-icons/ci";

export default function Inbox(){
    const mails = [
        {
            title: '',
            preview: '',
            time: ''
        },
        {
            title: '',
            preview: '',
            time: ''
        },
        {
            title: '',
            preview: '',
            time: ''
        },
    ]
    return (
        <DashLayout>
            <div className="mx-44">
                <h3 className="text-2xl font-semibold">Inbox</h3>

                <div>
                    {
                        mails.slice(0,2).map((mail, i) => (
                            <div key={i} className='flex border mt-3 space-x-4 p-3 rounded bg-white'>
                                <CiMail size={24} />
                                <div>
                                    <h5 className='font-semibold'>{mail.title}</h5>
                                    <p className='text-gray-500 text-sm'>{mail.preview}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-4">
                    <h5 className="text-gray-500">Older</h5>
                    {
                        mails.map((mail, i) => (
                            <div key={i} className='flex border mt-3 space-x-4 p-3 rounded bg-white'>
                                <CiMail size={24} />
                                <div>
                                    <h5 className='font-semibold'>{mail.title}</h5>
                                    <p className='text-gray-500 text-sm'>{mail.preview}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DashLayout>
    )
}