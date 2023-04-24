import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function AdminDetails(){
    const router = useRouter()
    const submitAdminDetails = (e) => {
        e.preventDefault()

        router.push('invite-members')
    }
    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Let us know more about you</h2>
                <p className="mt-3 text-gray-500 text-center">Enter your details below</p>

                <form className="mt-8" onSubmit={submitAdminDetails}>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label>First name</label>
                            <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                        </div>

                        <div className="flex flex-col">
                            <label>Middle name</label>
                            <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                        </div>

                        <div className="flex flex-col">
                            <label>Last name</label>
                            <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                        </div>
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-12">
                        <label>Email address</label>
                        <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-8">
                        <label>What’s your gender?</label>
                        <select className="focus:outline-none bg-white border p-2 rounded">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-center">
                        <button type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Next</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}