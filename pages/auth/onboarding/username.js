import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Username(){
    const router = useRouter()

    // handle submit
    const submitUsername = (values, actions) => {
        console.log(values)

        router.push('admin-details')
    }

    // validation schema
    const loginSchema = yup.object().shape({
        username: yup.string().required('Required')
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            username: '',
        },
        validationSchema: loginSchema,
        onSubmit: submitUsername
    })

    return(
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">How should we call you?</h2>
                <p className="mt-3 text-gray-500 text-center">Choose a Username that we can easily identify you with</p>

                <input 
                    type="text" 
                    id='username'
                    aria-label="username-input" 
                    value={values.username} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder="e.g. johnDoe, john_doe, " 
                    className={errors.username && touched.username ? 'w-80 mt-4 focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'w-80 mt-4 focus:outline-none border rounded px-4 py-2 bg-white'}
                />

                {touched.username && errors?.username && (<p className='w-80 text-red-500 text-sm'>{errors.username}</p>)}

                <button data-testid='next-btn' type="submit" className="mt-16 px-12 bg-[#2DABB1] text-white py-2">Next</button>
            </form>
        </Layout>
    )
}