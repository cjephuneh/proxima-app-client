import images from "@/assets/images";
import { AiFillApple } from 'react-icons/ai'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

export default function Download(){
    return (
        <div className="mt-52 flex items-center justify-center gap-20">
            <img src={images.app} alt="mobile app" />

            <div className="space-y-12">
                <p className="text-sm text-[#53B4B0]">TRY PROXIMA ON MOBILE</p>

                <p className="text-7xl">Download our <br /> app for free</p>

                <div className="flex gap-6">
                    <div className="border border-[#6DDCFF] rounded flex items-center gap-2 w-fit px-4 py-2">
                        <AiFillApple className="text-4xl" />
                        <div className="">
                            <p className="text-xs text-gray-500">DOWNLOAD ON THE</p>
                            <p className="font-bold text-2xl">App Store</p>
                        </div>
                    </div>

                    <div className="border border-[#6DDCFF] rounded flex items-center gap-2 w-fit px-4 py-2">
                        <IoLogoGooglePlaystore className="text-4xl" />
                        <div className="">
                            <p className="text-xs text-gray-500">GET IT ON</p>
                            <p className="font-bold text-2xl">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}