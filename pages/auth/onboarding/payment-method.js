import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { AiOutlineCreditCard } from 'react-icons/ai'
import { MdOutlineMobileScreenShare } from 'react-icons/md'

export default function PaymentMethod(){
    const router = useRouter()

    const handlePayment = () => {
        router.push('admin-details')
    } 
    return (
        <Layout>
            <div className="flex flex-col items-center mt-20">
                <h2 className="font-semibold text-3xl">Select payment method</h2>
                <p className="mt-3 text-gray-500 text-center">How would you like to pay for this subscription?</p>
                
                <div className="mt-10 w-96 space-y-3">
                    <button onClick={() => handlePayment()} className="flex w-full text-left gap-3 border rounded p-3 bg-white cursor-pointer">
                        <AiOutlineCreditCard size={24} />
                        <div>
                            <p>Credit Card</p>
                            <p className="text-gray-500 text-sm">Credit/Debit Card</p>
                        </div>
                    </button>

                    <button onClick={() => handlePayment()} className="flex w-full text-left gap-3 border rounded p-3 bg-white cursor-pointer">
                        <MdOutlineMobileScreenShare size={24} />
                        <div>
                            <p>Mobile Money</p>
                            <p className="text-gray-500 text-sm">M-Pesa, Orange Money, Airtel Money</p>
                        </div>
                    </button>
                </div>
            </div>
        </Layout>
    )
}