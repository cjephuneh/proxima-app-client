import { FaCheckCircle } from 'react-icons/fa'

export default function Pricing(){
    return (
        <div className="mt-60">
            <h2 className="text-5xl text-center">Simple, easy pricing</h2>
            <p className="text-center text-gray-500 mt-8">Amet minim mollit non deserunt ullamco.</p>

            <div className="mt-12 flex justify-around">
                <div className="bg-gray-800 w-80 p-4 rounded space-y-4">
                    <h1>Personal</h1>
                    <p className="text-5xl">$19<span className="text-sm text-gray-500">/month</span></p>
                    <p className="text-gray-500">All the basic features to boost your freelance career</p>

                    <hr className="border-t border-gray-700" />

                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Full access to Landingfolio</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 100GB Free Storage</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Unlimited Visitors</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 10 Agents</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Live Chat Support</li>
                    </ul>

                    <div>
                        <button className='border border-[#6DDCFF] w-full py-2 rounded mt-8'>Get 14 Days Free Trial</button>
                    </div>
                </div>

                <div className="bg-gray-800 w-80 p-4 rounded space-y-4 border border-[#6DDCFF]">
                    <h1>Professional</h1>
                    <p className="text-5xl">$49<span className="text-sm text-gray-500">/month</span></p>
                    <p className="text-gray-500">All the basic features to boost your freelance career</p>

                    <hr className="border-t border-gray-700" />

                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Full access to Landingfolio</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 100GB Free Storage</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Unlimited Visitors</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 10 Agents</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Live Chat Support</li>
                    </ul>

                    <div>
                        <button className='w-full py-2 rounded mt-8 bg-[#7F60F9]'>Get 14 Days Free Trial</button>
                    </div>
                </div>

                <div className="bg-gray-800 w-80 p-4 rounded space-y-4">
                    <h1>Business</h1>
                    <p className="text-5xl">$99<span className="text-sm text-gray-500">/month</span></p>
                    <p className="text-gray-500">All the basic features to boost your freelance career</p>

                    <hr className="border-t border-gray-700" />

                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Full access to Landingfolio</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 100GB Free Storage</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Unlimited Visitors</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> 10 Agents</li>
                        <li className='flex items-center gap-2'> <FaCheckCircle /> Live Chat Support</li>
                    </ul>

                    <div>
                        <button className='border border-[#6DDCFF] w-full py-2 rounded mt-8'>Get 14 Days Free Trial</button>
                    </div>
                </div>
            </div>
        </div>
    )
}