import DashLayout from "@/components/dashboard/DashLayout";
import { BsBell } from "react-icons/bs";

export default function Notifications(){
    const notifications = [
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
                <h3 className="text-2xl font-semibold">Notifications</h3>

                <div>
                    {
                        notifications.slice(0,2).map((not, i) => (
                            <div key={i} className='flex border mt-3 space-x-4 p-3 rounded bg-white'>
                                <BsBell size={24} />
                                <div>
                                    <h5 className='font-semibold'>{not.title}</h5>
                                    <p className='text-gray-500 text-sm'>{not.preview}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-4">
                    <h5 className="text-gray-500">Older</h5>
                    {
                        notifications.map((not, i) => (
                            <div key={i} className='flex border mt-3 space-x-4 p-3 rounded bg-white'>
                                <BsBell size={24} />
                                <div>
                                    <h5 className='font-semibold'>{not.title}</h5>
                                    <p className='text-gray-500 text-sm'>{not.preview}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DashLayout>
    )
}