import DashLayout from "@/components/dashboard/DashLayout";
import { useRouter } from "next/router";
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function NewSurvey(){
    const router = useRouter()

    // handle submit
    const submitNewSurveyDetails = (values, actions) => {
        console.log(values)

        router.push('new-survey/generated-questions')
    }

    // validation schema
    const newSurveyFormSchema = yup.object().shape({
        topic: yup.string().required('Required'),
        noOfQuestions: yup.number().positive().integer().required('Required'),
        context: yup.string().required('Required'),
    })

    // formik form validation
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            topic: '',
            noOfQuestions: '',
            context: ''
        },
        validationSchema: newSurveyFormSchema,
        onSubmit: submitNewSurveyDetails
    })

    return (
        <DashLayout>
            <div className="flex justify-center mt-20">
                <div className="">
                    <h2 className="font-semibold text-3xl">Generate a Survey</h2>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label>Survey topic</label>
                            <input 
                                type='text'
                                id="topic"
                                placeholder="Enter a survey topic"
                                value={values.topic}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.topic && touched.topic ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.topic && errors.topic && (<p className='text-red-500 text-sm'>{errors.topic}</p>)}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label>Number of questions</label>
                            <input 
                                type='number'
                                id='noOfQuestions'
                                placeholder="How many questions do you want to have?"
                                value={values.noOfQuestions}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.noOfQuestions && touched.noOfQuestions ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            />
                            {touched.noOfQuestions && errors.noOfQuestions && (<p className='text-red-500 text-sm'>{errors.noOfQuestions}</p>)}
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label>Survey context</label>
                            <textarea 
                                cols="30" 
                                rows="6"
                                id="context"
                                value={values.context}
                                onChange={handleChange}
                                onBlur={handleBlur} 
                                className={errors.context && touched.context ? 'focus:outline-none border-2 border-red-500 rounded px-4 py-2 bg-white' : 'focus:outline-none border rounded px-4 py-2 bg-white'}
                            ></textarea>
                            {touched.context && errors.context && (<p className='text-red-500 text-sm'>{errors.context}</p>)}
                        </div>

                        <button type='submit' className="bg-[#2DABB1] w-full text-white py-2">Generate Questions</button>
                    </form>
                </div>
            </div>
        </DashLayout>
    )
}