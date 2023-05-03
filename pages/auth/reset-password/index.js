import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function ResetPassword(){
    const router = useRouter()

    // handle submit
    const submitEmailToResetPassword = (values, actions) => {
        router.push('reset-password/new-password')
    }

    // validation schema
    const resetPasswordSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: resetPasswordSchema,
        onSubmit: submitEmailToResetPassword
    })

    
    return (
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Did you forget your account credentials?</h2>
                <p className="mt-3 text-gray-500 text-center">We all get lost once in a while, let’s help you find your way back to your account. <br /> We’ll share a way through your email address</p>

                <input 
                    type="email"
                    id="email" 
                    aria-label="email-input" 
                    value={values.email} 
                    onChange={handleChange} 
                    onBlur={handleBlur}
                    placeholder="e.g. johnDoe, john_doe, " 
                    className={errors.email && touched.email ? 'mt-4 focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'mt-4 focus:outline-none border rounded px-4 py-2 bg-white'}
                />
                {touched.email && errors?.email && (<p className='text-red-500 text-sm w-72 px-1'>{errors.email}</p>)}
                <button data-testid='request-btn' type="submit" className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Request</button>
            </form>
        </Layout>
    )
}