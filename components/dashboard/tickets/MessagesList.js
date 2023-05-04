import images from "@/assets/images";

export default function MessagesList({messages}){
    return (
        <div className="w-1/5 h-full pb-14 overflow-y-scroll">
        {/* unread */}
        <div>
            <h5 className="text-gray-500 tracking-wider">UNREAD</h5>
            {
                messages.filter(message => message.read === false).map((message, id) => (
                    <button key={id} className="mt-3 w-full text-left cursor-pointer space-y-1 shadow px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 ">
                                <img src={images.user} alt='user' className='w-10 h-10 object-contain' />
                                <div>
                                    <p className="font-semibold">{message.senderName}</p>
                                    <p className="text-sm text-gray-500">{message.senderEmail.length > 20 ? message.senderEmail.slice(0, 20)+'...' : message.senderEmail}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 w-fit self-end">{message.timeSent.split(' ')[1]}</p>
                        </div>
                        <p className="text-sm">{message.message.length > 60 ? message.message.slice(0, 60)+'...' : message.message}</p>
                    </button>
                ))
            }
        </div>

        {/* read */}
        <div className="mt-4">
            <h5 className="text-gray-500 tracking-wider">READ</h5>
            {
                messages.filter(message => message.read === true).map((message, id) => (
                    <button key={id} className="mt-3 w-full text-left cursor-pointer space-y-1 shadow px-4 py-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 ">
                                <img src={images.user} alt='user' className='w-10 h-10 object-contain' />
                                <div>
                                    <p className="font-semibold">{message.senderName}</p>
                                    <p className="text-sm text-gray-500">{message.senderEmail.length > 20 ? message.senderEmail.slice(0, 20)+'...' : message.senderEmail}</p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500">{message.timeSent.split(' ')[1]}</p>
                        </div>
                        <p className="text-sm">{message.message.length > 60 ? message.message.slice(0, 60)+'...' : message.message}</p>
                    </button>
                ))
            }
        </div>
    </div>
    )
}