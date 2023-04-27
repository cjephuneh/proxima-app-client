import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewPassword(){
    const router = useRouter()

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showValidationMessage, setShowValidationMessage] = useState(false)
    const [showPasswordMismatchMessage, setShowPasswordMismatchMessage] = useState(false)

    const setNewPasswordAndLogin = () => {
        if(newPassword === '' || confirmPassword === ''){
            setShowValidationMessage(true)
            return
        }

        if(newPassword !== confirmPassword){
            console.log(newPassword)
            console.log(confirmPassword)
            setShowValidationMessage(false)
            setShowPasswordMismatchMessage(true)
            return
        }
        router.replace('/dashboard')
    }
    return (
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Enter new Password</h2>
                <p className="mt-3 text-gray-500 text-center">Register a new password for your account</p>

                <div className="flex flex-col w-96 mx-auto mt-12">
                    <label>New password</label>
                    <input type="password" aria-label="new-password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                    <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Password is required</p>
                </div>

                <div className="flex flex-col w-96 mx-auto mt-4">
                    <label>Confirm new password</label>
                    <input type="password" aria-label='confirm-password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="focus:outline-none bg-white border p-2 rounded" />
                    <p className={showValidationMessage ? "text-sm text-red-500" : 'hidden'}>Password is required</p>
                    <p className={showPasswordMismatchMessage ? "text-sm text-red-500" : 'hidden'}>Passwords do not match</p>
                </div>

                <button data-testid='submit-btn' onClick={() => setNewPasswordAndLogin()} className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Login</button>
            </div>
        </Layout>
    )
}