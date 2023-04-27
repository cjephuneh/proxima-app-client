import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function OrgName(){
    const { systemTheme, theme, setTheme } = useTheme();

    const router = useRouter()

    const [orgName, setOrgName] = useState('')

    const [showValidationMessage, setShowValidationMessage] = useState(false)

    const submitOrgName = () => {
        if(orgName === ''){
            setShowValidationMessage(true)
            return
        }
        router.push('details')
    }

    useEffect(() => {
        setTheme('light')
    }, [])

    return (
        <Layout>
            <div className="flex flex-col items-center mt-32">
                <h2 className="font-semibold text-3xl">What is your organization name?</h2>
                <p className="mt-3 text-gray-500 text-center">Your organization name will allow people to join your organization?</p>

                <input type="text" aria-label="orgname-input" value={orgName} onChange={e => setOrgName(e.target.value)} placeholder="Enter business name" className="mt-8 focus:outline-none bg-white border p-2 rounded" />
                <p className={showValidationMessage ? "text-sm text-red-500 w-72 pl-2" : 'hidden'}>Organization name is required</p>

                <div className="mt-16">
                    <button data-testid='proceed-btn' onClick={() => submitOrgName()} className="border px-20 py-2 rounded bg-[#2DABB1] text-white">Proceed</button>
                </div>
            </div>
        </Layout>
    )
}