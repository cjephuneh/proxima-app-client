import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function AdminDetails(){
    const router = useRouter()

    // handle submit
    const submitAdminDetails = (values, actions) => {
       console.log(values)

        router.push('invite-members')
    }

    // validation schema
    const adminDetailsSchema = yup.object().shape({
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
        middlename: yup.string().required('Required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        gender: yup.string().required('Required'),
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            middlename: '',
            email: '',
            gender: ''
        },
        validationSchema: adminDetailsSchema,
        onSubmit: submitAdminDetails
    })

    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Let us know more about you</h2>
                <p className="mt-3 text-gray-500 text-center">Enter your details below</p>

                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label>First name</label>
                            <input 
                                type="text" 
                                id="firstname"
                                aria-label="first-name-input" 
                                value={values.firstname} 
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                className={errors.firstname && touched.firstname ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.firstname && errors?.firstname && (<p className='text-red-500 text-sm'>{errors.firstname}</p>)}
                        </div>

                        <div className="flex flex-col">
                            <label>Middle name</label>
                            <input 
                                type="text"
                                id="middlename" 
                                aria-label="middle-name-input" 
                                value={values.middlename} 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                className={errors.middlename && touched.middlename ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.middlename && errors?.middlename && (<p className='text-red-500 text-sm'>{errors.middlename}</p>)}
                        </div>

                        <div className="flex flex-col">
                            <label>Last name</label>
                            <input 
                                type="text"
                                id="lastname" 
                                aria-label="last-name-input" 
                                value={values.lastname} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.lastname && touched.lastname ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.lastname && errors?.lastname && (<p className='text-red-500 text-sm'>{errors.lastname}</p>)}
                        </div>
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-12">
                        <label>Email address</label>
                        <input 
                            type="email" 
                            id="email" 
                            aria-label="email-input" 
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            className={errors.email && touched.email ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.email && errors?.email && (<p className='text-red-500 text-sm'>{errors.email}</p>)}
                    </div>

                    <div className="flex flex-col w-96 mx-auto mt-8">
                        <label>What’s your gender?</label>
                        <select 
                            aria-label="gender-input"
                            id="gender" 
                            value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.gender && touched.gender ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}

                        >
                            <option value=''></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {touched.gender && errors?.gender && (<p className='text-red-500 text-sm'>{errors.gender}</p>)}
                    </div>

                    <div className="flex items-center justify-center">
                        <button data-testid='next-btn' type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Next</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}