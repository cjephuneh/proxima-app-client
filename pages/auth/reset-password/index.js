import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ResetPassword(){
    const router = useRouter()

    const [email, setEmail] = useState('')

    const [showValidationMessage, setShowValidationMessage] = useState(false)

    const submitEmailToResetPassword = () => {
        if(email === ''){
            setShowValidationMessage(true)
            return
        }
        router.push('reset-password/new-password')
    }
    return (
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Did you forget your account credentials?</h2>
                <p className="mt-3 text-gray-500 text-center">We all get lost once in a while, let’s help you find your way back to your account. <br /> We’ll share a way through your email address</p>

                <input type="text" aria-label="email-input" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g. johnDoe, john_doe, " className="mt-8 focus:outline-none bg-white border p-2 rounded" />
                <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Email is required</p>
                <button data-testid='request-btn' onClick={() => submitEmailToResetPassword()} className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Request</button>
            </div>
        </Layout>
    )
}