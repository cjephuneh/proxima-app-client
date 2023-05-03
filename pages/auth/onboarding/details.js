import Layout from "@/components/auth/Layout";
import { useRouter } from "next/router";
import { AiOutlineCloudUpload, AiFillPlusSquare, AiOutlineSearch } from 'react-icons/ai'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function OrgName(){
    const router = useRouter()

    // handle submit
    const submitOrgDetails = (values, actions) => {
        console.log(values)

        router.push('payment-plan')
    }

    // validation schema
    const orDetailsSchema = yup.object().shape({
        name: yup.string().required('Required'),
        regNo: yup.string().required('Required'),
        businessDoc: yup.string().required('Required'),
        businessFile: yup.mixed().required('Required'),
        category: yup.string().required('Required'),
        subCategory: yup.string().required('Required')
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            name: '',
            regNo: '',
            businessDoc: '',
            businessFile: '',
            category: '',
            subCategory: ''
        },
        validationSchema: orDetailsSchema,
        onSubmit: submitOrgDetails
    })

    return (
        <Layout>
            <div className="flex flex-col items-center mt-16 mb-4">
                <h2 className="font-semibold text-3xl">Let’s know more about your Business</h2>
                <p className="mt-3 text-gray-500 text-center">Help us curate services that suit you best.</p>

                <form className="mt-6 w-72 space-y-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label>Name of Business</label>
                        <input 
                            type="text" 
                            id='name'
                            aria-label="name-input" 
                            value={values.name} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder="Business name" 
                            className={errors.name && touched.name ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.name && errors?.name && (<p className='text-red-500 text-sm'>{errors.name}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Business Registration No.</label>
                        <input 
                            type="text" 
                            id='regNo'
                            aria-label="regNo-input" 
                            value={values.regNo} 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder="eg.BRS 909099" 
                            className={errors.regNo && touched.regNo ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                        />
                        {touched.regNo && errors?.regNo && (<p className='text-red-500 text-sm'>{errors.regNo}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Business Document</label>
                        <select 
                            aria-label='business-doc-option-dropdown'
                            id="businessDoc" 
                            className={errors.businessDoc && touched.businessDoc ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            value={values.businessDoc} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value=''>Select below</option>
                            <option value="business registration document">Business Registration Document</option>
                        </select>
                        {touched.businessDoc && errors?.businessDoc && (<p className='text-red-500 text-sm'>{errors.businessDoc}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Upload a PDF of Business Registration</label>
                        <label 
                            // className="border py-2 px-5 flex flex-col items-center rounded space-y-2"
                            className={errors.businessFile && touched.businessFile ? 'border-2 border-red-500 rounded px-5 py-2 flex flex-col items-center space-y-2' : 'border-2 rounded px-5 py-2 flex flex-col items-center space-y-2'}
                        >
                            <AiOutlineCloudUpload className="h-8 w-8" />
                            <input 
                                type="file" 
                                id="businessFile"
                                aria-label="business-doc-upload-input" 
                                value={values.businessFile}
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                className="hidden w-full h-full" 
                            />
                            <span className="text-gray-500 text-sm text-center">
                                Drag a file here or Browse and chose the files you want to upload from your computer
                            </span>
                            <AiFillPlusSquare color="#0092FF" className="h-8 w-8" />
                        </label>
                        {touched.businessFile && errors?.businessFile && (<p className='text-red-500 text-sm'>{errors.businessFile}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Category</label>
                        <div 
                            className={errors.category && touched.category ? 'flex items-center gap-2 border-2 border-red-500 rounded px-4 py-2 bg-white' : 'flex items-center gap-2 border rounded px-4 py-2 bg-white'}
                        >
                            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
                            <input 
                                type="text" 
                                id="category"
                                aria-label="category-input" 
                                value={values.category} 
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                placeholder="Search here" 
                                className="focus:outline-none w-full bg-transparent"                                 
                            />
                        </div>
                        {touched.category && errors?.category && (<p className='text-red-500 text-sm'>{errors.category}</p>)}
                    </div>

                    <div className="flex flex-col">
                        <label>Sub category</label>
                        <div 
                            className={errors.subCategory && touched.subCategory ? 'flex items-center gap-2 border-2 border-red-500 rounded px-4 py-2 bg-white' : 'flex items-center gap-2 border rounded px-4 py-2 bg-white'}
                        >
                            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
                            <input 
                                type="text" 
                                id="subCategory"
                                aria-label="subCategory-input" 
                                value={values.subCategory} 
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                placeholder="Search here" 
                                className="focus:outline-none w-full bg-transparent" 
                            />
                        </div>
                        {touched.subCategory && errors?.subCategory && (<p className='text-red-500 text-sm'>{errors.subCategory}</p>)}
                    </div>

                    <button type='submit' data-testid='next-btn' className="w-full bg-[#2DABB1] text-white py-2">Next</button>
                </form>
            </div>
        </Layout>
    )
}