import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";

export default function Index(){
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('light')
    }, [])

    return (
        <Layout>
            <div className="flex flex-col items-center mt-32">
                <h2 className="font-semibold text-3xl">Is this your first visit?</h2>
                <p className="mt-3 text-gray-500 text-center">Have you ever registered on the platform before (either as a client or <br /> organization)?</p>

                <div className="mt-16 flex flex-col space-y-3">
                    <Link href={'auth/login'} className="border px-12 py-3 rounded bg-[#2DABB1] text-white">Yes, I have been here before</Link>

                    <Link href={'auth/onboarding/orgname'} className="px-12 py-3 rounded bg-gray-200">No, this is my first time</Link>
                </div>
            </div>
        </Layout>
    )
}