import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { register_tenant } from "@/redux/slice/tenantmanagement/tenantmanagementSlice";
import { useEffect } from "react";

export default function OrgName(){
    const router = useRouter()
    const dispatch = useDispatch()

    // fetch tenant data from store
    const { tenant, isTenantError, isTenantSuccess, isTenantLoading, isTenantMessage } = useSelector((state) => state.tenant)

    console.log(tenant, isTenantLoading, isTenantSuccess)

    // register a tenant
    const submitOrgName = (values, actions) => {
        // console.log(values)

        dispatch(register_tenant({
            tenant_name: values.orgName,
            industry: values.industry
        }))

        // check if tenant was registered and navigate to next page
        if(isTenantSuccess && tenant){
            router.push('payment-plan')
        }
    }

    
    // validation schema
    const orgNameSchema = yup.object().shape({
        orgName: yup.string().required('Required'),
        industry: yup.string().required('Required')
    })

    // formik form validationemail('Invalid email address').
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            orgName: '',
            industry: ''
        },
        validationSchema: orgNameSchema,
        onSubmit: submitOrgName
    })

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="flex flex-col items-center mt-32">
                {/* <h2 className="font-semibold text-3xl">What is your organization name?</h2> */}
                <h2 className="font-semibold text-3xl">Please provide your organization details</h2> 
                <div className="mt-4 space-y-3">
                    <div className="">
                        {/* <p className="mt-3 text-gray-500 text-center">Your organization name will allow people to join your organization?</p> */}
                        <p className="text-gray-500">Organization name</p>

                        <input 
                            type="text" 
                            id="orgName"
                            aria-label="orgname-input" 
                            value={values.orgName} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder="Enter business name" 
                            className={errors.orgName && touched.orgName ? 'focus:outline-none w-80 border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none w-80 border rounded px-4 py-2 bg-white'}
                        />
                        {touched.orgName && errors?.orgName && (<p className='text-red-500 text-sm w-80 px-1'>{errors.orgName}</p>)}
                    </div>
                    <div className="">
                        {/* <p className="mt-3 text-gray-500 text-center">Your organization name will allow people to join your organization?</p> */}
                        <p className="text-gray-500">Industry</p>

                        <input 
                            type="text" 
                            id="industry"
                            aria-label="orgname-input" 
                            value={values.industry} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder="Your business industry" 
                            className={errors.industry && touched.industry ? 'focus:outline-none w-80 border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none w-80 border rounded px-4 py-2 bg-white'}
                        />
                        {touched.industry && errors?.industry && (<p className='text-red-500 text-sm w-80 px-1'>{errors.industry}</p>)}
                    </div>
                </div>

                <div className="mt-10">
                    <button data-testid='proceed-btn' type="submit" className="border px-20 py-2 rounded bg-[#2DABB1] text-white">{isTenantLoading ? 'Regitering...' : 'Proceed'}</button>
                </div>
            </form>
        </Layout>
    )
}