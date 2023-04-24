import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function NewPassword(){
    const router = useRouter()
    const setNewPasswordAndLogin = () => {
        router.replace('/dashboard')
    }
    return (
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Enter new Password</h2>
                <p className="mt-3 text-gray-500 text-center">Register a new password for your account</p>

                <div className="flex flex-col w-96 mx-auto mt-12">
                    <label>New password</label>
                    <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                </div>

                <div className="flex flex-col w-96 mx-auto mt-4">
                    <label>Confirm new password</label>
                    <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                </div>

                <button onClick={() => setNewPasswordAndLogin()} className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Login</button>
            </div>
        </Layout>
    )
}