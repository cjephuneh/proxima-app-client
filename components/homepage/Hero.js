import { HiStar } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'

export default function Hero(){
    return(
        <div className='-mt-16 h-screen flex items-center'>
            <div>
                <div className='w-1/2 space-y-12'>
                    <h2 className='text-6xl tracking-wide'>
                        Connecting Orgs <br />
                        with Clients
                    </h2>

                    <p className='text-gray-500'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat. 
                    </p>

                    <div className='flex items-center gap-2 border-2 border-[#6DDCFF] px-4 py-1 rounded-full'>
                        <BsSearch color='gray' />
                        <input type="text" placeholder='Try Proxima Inc, Maziwa Inc, etc.' className='text-gray-500 focus:outline-none bg-transparent px-1 py-1 flex-1' />
                        <button className='bg-white text-black py-3 px-5 rounded-full -mr-3'>FIND AN ORGANIZATION</button>
                    </div>

                    <div>
                        <p className='text-lg'>Trusted by 50k+ users</p>
                        <div className='mt-2 flex gap-2 items-center'>
                            <div className='flex gap-1'>
                                <HiStar color='#7F60F9' />
                                <HiStar color='#7F60F9' />
                                <HiStar color='#7F60F9' />
                                <HiStar color='#7F60F9' />
                                <HiStar color='#7F60F9' />
                            </div>
                            <p className='text-sm'>4.1/5 <span className='text-gray-500'>(14k reviews)</span></p>
                        </div>
                    </div>
                </div>


                <div>

                </div>
            </div>
        </div>
    )
}