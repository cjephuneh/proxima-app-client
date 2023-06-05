import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function OrgName(){
    const router = useRouter()

    // handle submit
    const submitOrgName = (values, actions) => {
        console.log(values)

        router.push('details')
    }

    // validation schema
    const orgNameSchema = yup.object().shape({
        orgName: yup.string().required('Required'),
    })

    // formik form validationemail('Invalid email address').
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            orgName: ''
        },
        validationSchema: orgNameSchema,
        onSubmit: submitOrgName
    })

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-32">
                <h2 className="font-semibold text-3xl">What is your organization name?</h2>
                <p className="mt-3 text-gray-500 text-center">Your organization name will allow people to join your organization?</p>

                <input 
                    type="text" 
                    id="orgName"
                    aria-label="orgname-input" 
                    value={values.orgName} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder="Enter business name" 
                    className={errors.orgName && touched.orgName ? 'focus:outline-none w-80 mt-4 border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none w-80 mt-4 border rounded px-4 py-2 bg-white'}
                />
                {touched.orgName && errors?.orgName && (<p className='text-red-500 text-sm w-80 px-1'>{errors.orgName}</p>)}

                <div className="mt-10">
                    <button data-testid='proceed-btn' type="submit" className="border px-20 py-2 rounded bg-[#2DABB1] text-white">Proceed</button>
                </div>
            </form>
        </Layout>
    )
}