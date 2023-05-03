import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function NewPassword(){
    const router = useRouter()

    const setNewPasswordAndLogin = () => {
        router.replace('/dashboard')
    }

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/ // min 6 characters, 1 upper case, one lower case, 1 numeric digit

    const newPasswordSchema = yup.object().shape({
        password: yup
        .string()
        .min(5)
        .matches(passwordRules, {message: 'A password must contain a minimum 6 characters, 1 upper case, 1 lower case, 1 numeric digit'})
        .required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Please confirm your password')
    })

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
        password: '',
        confirmPassword: ''
        },
        validationSchema: newPasswordSchema,
        onSubmit: setNewPasswordAndLogin,
    })

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Enter new Password</h2>
                <p className="mt-3 text-gray-500 text-center">Register a new password for your account</p>

                <div className="flex flex-col w-96 mx-auto mt-12">
                    <label>New password</label>
                    <input 
                        type="password" 
                        id="password"
                        aria-label="new-password" 
                        value={values.password} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className={errors.password && touched.password ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.password && errors?.password && (<p className='text-red-500 text-sm'>{errors.password}</p>)}
                </div>

                <div className="flex flex-col w-96 mx-auto mt-4">
                    <label>Confirm new password</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        aria-label='confirm-password' 
                        value={values.confirmPassword} 
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        className={errors.confirmPassword && touched.confirmPassword ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                    {touched.confirmPassword && errors?.confirmPassword && (<p className='text-red-500 text-sm'>{errors.confirmPassword}</p>)}
                </div>

                <button data-testid='submit-btn' type="submit" className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Login</button>
            </form>
        </Layout>
    )
}