import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { register_admin, resetAuthStateValues } from "@/redux/slice/auth/authSlice";
import { useEffect, useState } from "react";

export default function AdminDetails(){
    const router = useRouter()
    const dispatch = useDispatch()

    // handle registration errors
    const [showErrors, setShowErrors] = useState(false)

    // fetch tenant data from local storage
    const [tenantInfo, setTenantInfo] = useState(null)

    const getTenantInfo = () => localStorage.getItem('proxima_tenant')
    useEffect(() => {
        // Perform localStorage action
        // const item = localStorage.getItem('key')
        const tenantData = getTenantInfo()
        setTenantInfo(JSON.parse(tenantData))
    }, [])
      
    // fetch data from store
    const { admin, isAdminLoading, isAdminSuccess, isAdminError, isAdminMessage } = useSelector((state) => state.auth)

    console.log(admin, isAdminLoading, isAdminSuccess, isAdminError, isAdminMessage)

    // handle show error messages
    useEffect(() => {
        if(isAdminMessage){
            setShowErrors(true)
        }
    }, [isAdminMessage])

    // variables to trigger navigation
    const [allowNavigation, setAllowNavigation] = useState(false)

    // handle submit
    const submitAdminDetails = (values, actions) => {
       if(!tenantInfo) return

       dispatch(register_admin({
        username: values.username,
        email: values.email,
        first_name: values.firstname,
        last_name: values.lastname,
        phonenumber: values.phonenumber,
        gender: values.gender,
        DOB: values.DOB,
        password: values.password,
        confirm_password: values.confirmPassword,
        user_type: 'admin',
        tenant_id: tenantInfo.tenant_id
       }))

       // Set the state variable to trigger the navigation
    //    setAllowNavigation(true)
    }

    useEffect(() => {
        if(isAdminError){
            setShowErrors(true)
        }
        // navigate to next page if admin was registered successfully
        if (isAdminSuccess && admin) {
          router.push('invite-members');
        }
        dispatch(resetAuthStateValues())
      }, [isAdminSuccess, admin, router, isAdminError, dispatch]);

    // validation schema
    const adminDetailsSchema = yup.object().shape({
        firstname: yup.string().required('Required'),
        lastname: yup.string().required('Required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        gender: yup.string().required('Required'),
        username: yup.string().required('Required'),
        password: yup
                    .string()
                    .required('Required')
                    .min(8, 'Password must be at least 8 characters long')
                    .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?.&])[A-Za-z\d@$!%*#?.&]+$/,
                    'Password must contain at least one letter, one number, and one special character'
                    ),
        confirmPassword: yup
                            .string()
                            .oneOf([yup.ref('password'), null], 'Passwords must match')
                            .required('Required'),
        phonenumber: yup.string().required('Required'),
        DOB: yup
                .string()
                .required('Required')
                .matches(
                /^\d{4}-\d{2}-\d{2}$/,
                'Must be in the format yyyy-mm-dd'
                )
                .transform((value, originalValue) => {
                // Modify the input value to remove any whitespace or additional characters
                if (originalValue) {
                    return originalValue.trim();
                }
                return value;
                }),
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            firstname: 'kim',
            lastname: 'kam',
            email: 'kam@email.com',
            gender: 'Male',
            username: 'qwertykim',
            password: 'Password123!',
            confirmPassword: 'Password123!',
            phonenumber: '254758202697',
            DOB: '2000-12-12',
        },
        validationSchema: adminDetailsSchema,
        onSubmit: submitAdminDetails
    })

    return(
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Let us know more about you</h2>
                <p className="mt-3 text-gray-500 text-center">Enter your details below</p>

                {/* {
                    showErrors && (
                        <div className="mt-3 space-y-1">
                            {
                                Object.entries(isAdminMessage.message).map(message => <p className="text-sm text-red-500">{message[1][0]}</p>)
                            }
                        </div>
                    )
                } */}

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label>Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                aria-label="username-input" 
                                value={values.username} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.username && touched.username ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.username && errors?.username && (<p className='text-red-500 text-sm'>{errors.username}</p>)}
                        </div>
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
                            <label>Last Name</label>
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

                    <div className="flex gap-6">
                        <div className="flex flex-col">
                            <label>Date of Birth</label>
                            <input 
                                type="text" 
                                id="DOB" 
                                aria-label="dob-input" 
                                value={values.DOB} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.DOB && touched.DOB ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.DOB && errors?.DOB && (<p className='text-red-500 text-sm'>{errors.DOB}</p>)}
                        </div>
                        
                        <div className="flex flex-col">
                            <label>Email Address</label>
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
                        <div className="flex flex-col">
                            <label>Phone Number</label>
                            <input 
                                type="text" 
                                id="phonenumber" 
                                aria-label="phonenumber-input" 
                                value={values.phonenumber} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.phonenumber && touched.phonenumber ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.phonenumber && errors?.phonenumber && (<p className='text-red-500 text-sm'>{errors.phonenumber}</p>)}
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col w-full">
                            <label>Gender?</label>
                            <select 
                                aria-label="gender-input"
                                id="gender" 
                                value={values.gender}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.gender && touched.gender ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}

                            >
                                <option value=''></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            {touched.gender && errors?.gender && (<p className='text-red-500 text-sm'>{errors.gender}</p>)}
                        </div>
                        <div className="flex flex-col w-full relative">
                            <label>Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                aria-label="password-input" 
                                value={values.password} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.password && touched.password ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.password && errors?.password && (<p className='absolute -bottom-5 text-red-500 break-words text-sm'>{errors.password}</p>)}
                        </div>
                        <div className="flex flex-col w-full">
                            <label>Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                aria-label="confirmPassword-input" 
                                value={values.confirmPassword} 
                                onChange={handleChange} 
                                onBlur={handleBlur} 
                                className={errors.confirmPassword && touched.confirmPassword ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.confirmPassword && errors?.confirmPassword && (<p className='text-red-500 text-sm'>{errors.confirmPassword}</p>)}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button data-testid='next-btn' type='submit' className="mt-16 px-44 bg-[#2DABB1] text-white py-2 rounded">Next</button>
                    </div>
                </form>

            </div>
        </Layout>
    )
}