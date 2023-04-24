import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import { GrFormNext } from "react-icons/gr";
import { SlGraph } from "react-icons/sl";
import { TbActivityHeartbeat } from "react-icons/tb";

export default function Dashboard(){
    return(
        <DashLayout>
            <h2 className="text-3xl">Recently interacted</h2>

            <div className="mt-6 flex gap-8">
                <div className="bg-white p-4 rounded w-96">
                    <div className="flex gap-3">
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Drugs</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Health</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Complaint</p>
                    </div>

                    <h3 className="text-2xl mt-4">Moon fever when using Astecca</h3>

                    <p className="mt-4 text-sm text-gray-500">
                    I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-1">
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                        </div>

                        <div className="bg-red-200 w-8 h-8 rounded-full flex items-center justify-center">
                            <TbActivityHeartbeat className='w-7 h-7' color='red' />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded w-96">
                    <div className="flex gap-3">
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Drugs</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Health</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Complaint</p>
                    </div>

                    <h3 className="text-2xl mt-4">Moon fever when using Astecca</h3>

                    <p className="mt-4 text-sm text-gray-500">
                    I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-1">
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                        </div>

                        <div className="bg-red-200 w-8 h-8 rounded-full flex items-center justify-center">
                            <TbActivityHeartbeat className='w-7 h-7' color='red' />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded w-96">
                    <div className="flex gap-3">
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Drugs</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Health</p>
                        <p className="bg-purple-300 w-fit px-2 py-1 rounded text-sm">Complaint</p>
                    </div>

                    <h3 className="text-2xl mt-4">Moon fever when using Astecca</h3>

                    <p className="mt-4 text-sm text-gray-500">
                    I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex gap-1">
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                            <img src={images.user} alt='user' className="w-7 h-7 object-contain" />
                        </div>

                        <div className="bg-red-200 w-8 h-8 rounded-full flex items-center justify-center">
                            <TbActivityHeartbeat className='w-7 h-7' color='red' />
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl mt-6">Latest Issues</h2>

            <div className='mt-6 space-y-4'>
                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>

                <div className="mx-4 px-6 py-3 bg-white flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={images.user} alt='user' className="w-12 h-12 object-contain" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">Mike</p>
                        </div>
                    </div>

                    <div className=''>
                        <p>Moon fever when using Astecca</p>
                        <p className="text-sm text-gray-500">Some brief cut in half description</p>
                    </div>

                    <div className=''>
                        <p>189</p>
                        <p className="text-sm text-gray-500">User contributions</p>
                    </div>

                    <GrFormNext className="w-7 h-7" />
                </div>
            </div>
        </DashLayout>
    )
}