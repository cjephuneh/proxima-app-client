import Layout from "@/components/auth/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { resetUserStateValues, signin } from "@/redux/slice/auth/authSlice";
import { useEffect } from "react";

export default function Login(){
    const router  = useRouter()
    const dispatch = useDispatch()

    // handle submit
    const submitLoginDetails = (values, actions) => {
        dispatch(signin({
            email: values.email,
            password: values.password
        }))
   
        // router.replace('/dashboard')
    }

    // retrieve data from store
    const { user, isUserLoading, isUserError, isUserSuccess, isUserMessage } = useSelector((state) => state.auth)

    // console.log(isUserMessage)

    // handle user object changes
    useEffect(() => {
        if(isUserError){
            console.log(isUserMessage)
        }

        if(isUserSuccess && user){
            router.replace('/dashboard')
        }

        dispatch(resetUserStateValues())
    }, [isUserError, isUserSuccess, user, dispatch, router])

    // validation schema
    const loginSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Email is required'),
        password: yup.string().required('Password is required')
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: submitLoginDetails
    })

    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Welcome back</h2>
                <p className="mt-3 text-gray-500 text-center">Login to proceed</p>

                <form onSubmit={handleSubmit} className="mt-12 space-y-4">
                    <div className="flex flex-col">
                        <label>Email Address</label>
                        <input 
                            type="text" 
                            id="email"
                            data-testid='email-input' 
                            aria-label="email-input" 
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            placeholder="example@domain.com" 
                            className={errors.email && touched.email ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.email && errors?.email && (<p className='text-red-500 text-sm'>{errors.email}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Password</label>
                        <input 
                            type="password" 
                            id='password'
                            data-testid='password-input' 
                            aria-label="password-input" 
                            value={values.password} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            placeholder="password" 
                            className={errors.password && touched.password ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.password && errors?.password && (<p className='text-red-500 text-sm'>{errors.password}</p>)}
                    </div>

                    <div className="flex items-center justify-center">
                        <button data-testid='login-btn' type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Login</button>
                    </div>
                </form>

                <div className="flex items-center justify-center mt-12">
                    <Link href={'/auth/reset-password'} data-testid="forgot-btn" className="text-gray-700 underline">
                        I forgot my password
                    </Link>
                </div>
            </div>
        </Layout>
    )
}