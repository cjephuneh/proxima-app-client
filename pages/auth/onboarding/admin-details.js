import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminDetails(){
    const router = useRouter()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')

    const [showValidationMessage, setShowValidationMessage] = useState(false)

    const submitAdminDetails = (e) => {
        e.preventDefault()

        if(firstname == '' || lastname === '' || middlename === '' || email === '' || gender === ''){
            setShowValidationMessage(true)
            return
        }

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
                            <input type="text" aria-label="first-name-input" value={firstname} onChange={e => setFirstname(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                            <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>First name is required</p>
                        </div>

                        <div className="flex flex-col">
                            <label>Middle name</label>
                            <input type="text" aria-label="middle-name-input" value={middlename} onChange={e => setMiddlename(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                            <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Middle is required</p>
                        </div>

                        <div className="flex flex-col">
                            <label>Last name</label>
                            <input type="text" aria-label="last-name-input" value={lastname} onChange={e => setLastname(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                            <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Last name is required</p>
                        </div>
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-12">
                        <label>Email address</label>
                        <input type="text" aria-label="email-input" value={email} onChange={e => setEmail(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                        <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Email is required</p>
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-8">
                        <label>What’s your gender?</label>
                        <select aria-label="gender-input" value={gender} onChange={e =>setGender(e.target.value)} className="focus:outline-none bg-white border p-2 rounded">
                            <option value=''></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Gender is required</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <button data-testid='next-btn' type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Next</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}