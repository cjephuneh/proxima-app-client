import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

export default function OrgName(){
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('light')
    }, [])

    return (
        <Layout>
            <div className="flex flex-col items-center mt-32">
                <h2 className="font-semibold text-3xl">What is your organization name?</h2>
                <p className="mt-3 text-gray-500 text-center">Your organization name will allow people to join your organization?</p>

                <input type="text" placeholder="Enter business name" className="mt-8 focus:outline-none bg-white border p-2 rounded" />

                <div className="mt-16">
                    <Link href={'details'} className="border px-20 py-3 rounded bg-[#2DABB1] text-white">Proceed</Link>
                </div>
            </div>
        </Layout>
    )
}