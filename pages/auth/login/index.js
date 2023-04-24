import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login(){
    const router  = useRouter()
    const submitLoginDetails = (e) => {
        e.preventDefault()

        router.replace('/dashboard')
    }
    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Welcome back</h2>
                <p className="mt-3 text-gray-500 text-center">Login to proceed</p>

                <form onSubmit={submitLoginDetails} className="mt-12 space-y-4">
                    <div className="flex flex-col">
                        <label>Email Address</label>
                        <input type="text" placeholder="example@domain.com" className='border px-4 py-1 rounded bg-white focus:outline-none' />
                    </div>

                    <div className="flex flex-col">
                        <label>Password</label>
                        <input type="text" placeholder="*******" className='border px-4 py-1 rounded bg-white focus:outline-none' />
                    </div>

                    <div className="flex items-center justify-center">
                        <button type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Login</button>
                    </div>
                </form>

                <div className="flex items-center justify-center mt-12">
                    <Link href={'/auth/reset-password'} className="text-gray-700 underline">
                        I forgot my password
                    </Link>
                </div>
            </div>
        </Layout>
    )
}