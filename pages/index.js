import Layout from "@/components/auth/Layout";
import Link from "next/link";
import { useEffect } from "react";

export default function Index(){
    useEffect(() => {
        const checkScreenWidth = () => {
            if (window.innerWidth) {
                alert(window.innerWidth);
            }
        };

        // Call the function initially
        checkScreenWidth();

        // Add an event listener to check the screen width on window resize
        window.addEventListener("resize", checkScreenWidth);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", checkScreenWidth);
    }, []);

    return (
        <Layout>
            <div className="flex flex-col items-center mt-32">
                <h2 data-testid='first-visit' className="font-semibold text-3xl">Is this your first visit?</h2>
                <p className="mt-3 text-gray-500 text-center">Have you ever registered on the platform before (either as a client or <br /> organization)?</p>

                <div className="mt-16 flex flex-col space-y-3">
                    <Link href={'/auth/login'} data-testid='yes-btn' className="border px-12 py-3 rounded bg-[#2DABB1] text-white">Yes, I have been here before</Link>

                    <Link href={'/auth/onboarding/orgname'} className="px-12 py-3 rounded bg-gray-200">No, this is my first time</Link>
                </div>
            </div>
        </Layout>
    )
}