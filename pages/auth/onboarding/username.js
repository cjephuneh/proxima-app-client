import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Username(){
    const router = useRouter()

    const [username, setUsername] = useState('')

    const [showValidationMessage, setShowValidationMessage] = useState(false)

    const submitUsername = () => {
        if(username === ''){
            setShowValidationMessage(true)
            return
        }
        router.push('admin-details')
    }
    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">How should we call you?</h2>
                <p className="mt-3 text-gray-500 text-center">Choose a Username that we can easily identify you with</p>

                <input type="text" aria-label="username-input" value={username} onChange={e => setUsername(e.target.value)} placeholder="e.g. johnDoe, john_doe, " className="mt-8 focus:outline-none bg-white border p-2 rounded" />

                <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Username is required</p>

                <button data-testid='next-btn' onClick={() => submitUsername()} className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Next</button>
            </div>
        </Layout>
    )
}