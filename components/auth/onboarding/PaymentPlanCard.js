import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentPlanCard({type, price}){
    const router = useRouter()
    const choosePlan = () => {
        router.push('payment-method')
    } 
    return (
        <div className="bg-white border w-80 p-4 rounded space-y-4">
            <h1>{type}</h1>
            <p className="text-5xl">${price}<span className="text-sm text-gray-500">/month</span></p>
            <p className="text-gray-500">All the basic features to boost your freelance career</p>

            <hr className="border-t border-gray-300" />

            <ul className='space-y-3'>
                <li className='flex items-center gap-2'> <FaCheckCircle /> Full access to Landingfolio</li>
                <li className='flex items-center gap-2'> <FaCheckCircle /> 100GB Free Storage</li>
                <li className='flex items-center gap-2'> <FaCheckCircle /> Unlimited Visitors</li>
                <li className='flex items-center gap-2'> <FaCheckCircle /> 10 Agents</li>
                <li className='flex items-center gap-2'> <FaCheckCircle /> Live Chat Support</li>
            </ul>

            <div>
                <button onClick={() => choosePlan()} className='bg-[#2DABB1] text-white w-full py-2 rounded mt-8'>Get 14 Days Free Trial</button>
            </div>
        </div>
    )
}