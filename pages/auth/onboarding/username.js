import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Username(){
    const router = useRouter()

    const submitUsername = () => {
        router.push('admin-details')
    }
    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">How should we call you?</h2>
                <p className="mt-3 text-gray-500 text-center">Choose a Username that we can easily identify you with</p>

                <input type="text" placeholder="e.g. johnDoe, john_doe, " className="mt-8 focus:outline-none bg-white border p-2 rounded" />

                <button onClick={() => submitUsername()} className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Next</button>
            </div>
        </Layout>
    )
}