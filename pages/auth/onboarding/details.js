import Layout from "@/components/Layout";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCloudUpload, AiFillPlusSquare, AiOutlineSearch } from 'react-icons/ai'

export default function OrgName(){
    const { systemTheme, theme, setTheme } = useTheme();

    const router = useRouter()

    useEffect(() => {
        setTheme('light')
    }, [])

    const submitDetails = (e) => {
        e.preventDefault()

        router.push('username')
    }

    return (
        <Layout>
            <div className="flex flex-col items-center mt-16">
                <h2 className="font-semibold text-3xl">Let’s know more about your Business</h2>
                <p className="mt-3 text-gray-500 text-center">Help us curate services that suit you best.</p>

                <form className="mt-6 w-72 space-y-5" onSubmit={submitDetails}>
                    <div className="flex flex-col">
                        <label>Name of Business</label>
                        <input type="text" placeholder="Business name" className='border px-4 py-1 rounded bg-white focus:outline-none' />
                    </div>

                    <div className="flex flex-col">
                        <label>Business Registration No.</label>
                        <input type="text" placeholder="eg.BRS 909099" className='border px-4 py-1 rounded bg-white focus:outline-none' />
                    </div>

                    <div className="flex flex-col">
                        <label>Business Document</label>
                        <select className='border px-4 py-2 bg-white rounded focus:outline-none'>
                            <option value="business registration document">Business Registration Document</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>Upload a PDF Business Registration No.</label>
                        <label className="border py-2 px-5 flex flex-col items-center rounded space-y-2">
                            <AiOutlineCloudUpload className="h-8 w-8" />
                            <input type="file" className="hidden w-full h-full" />
                            <span className="text-gray-500 text-sm text-center">
                            Drag a file here or Browse and chose the files you want to upload from your computer
                            </span>
                            <AiFillPlusSquare color="#0092FF" className="h-8 w-8" />
                        </label>
                    </div>

                    <div className="flex flex-col">
                        <label>Category</label>
                        <div className="flex items-center gap-2 border px-3 py-2 rounded">
                            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
                            <input type="text" placeholder="Search here" className="focus:outline-none w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label>Sub category</label>
                        <div className="flex items-center gap-2 border px-3 py-2 rounded">
                            <AiOutlineSearch className="w-5 h-5 text-gray-500" />
                            <input type="text" placeholder="Search here" className="focus:outline-none w-full" />
                        </div>
                    </div>

                    <button type='submit' className="w-full bg-[#2DABB1] text-white py-2">Next</button>
                </form>
            </div>
        </Layout>
    )
}