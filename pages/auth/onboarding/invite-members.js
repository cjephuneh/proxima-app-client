import Layout from "@/components/auth/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function InviteMembers(){
    const router = useRouter()

    const submitMemberDetails = () => {
        router.replace('/dashboard')
    }
    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Almost there..</h2>
                <p className="mt-3 text-gray-500 text-center">Finish setting up your business by inviting members into your organization and <br /> adding their roles</p>

                <form onSubmit={submitMemberDetails}>
                    <div className="flex flex-col w-96 mx-auto mt-12">
                        <label>Their Email Address</label>
                        <input type="text" className="focus:outline-none bg-white border p-2 rounded" />
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-8">
                        <label>What role do you want them to play?</label>
                        <select className="focus:outline-none bg-white border p-2 rounded">
                            <option value="female">Employee</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-center">
                        <button data-testid='done-btn' type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Done</button>
                    </div>
                </form>

                <div className="flex items-center justify-center mt-12">
                    <Link href={'/dashboard'} className="text-[#2DABB1] underline">
                        Skip this for now
                    </Link>
                </div>
            </div>
        </Layout>
    )
}