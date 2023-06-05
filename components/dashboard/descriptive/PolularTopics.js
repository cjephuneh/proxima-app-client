import { AiFillStar } from "react-icons/ai";

export default function PopularTopics(){
    return (
        <div className="mt-5 bg-white rounded p-4">
            <div className="flex justify-between items-center">
                <h5 className="font-semibold text-xl">Popular topics</h5>
                <select className="bg-transparent border px-2 py-1">
                    <option value="hour">Last one hour</option>
                    <option value="3hours">Last 3 hours</option>
                    <option value="day">Last 24 hours</option>
                    <option value="week">Last one week</option>
                    <option value="month">Last one month</option>
                    <option value="3months">Last 3 months</option>
                </select>
            </div>

            <div className="mt-5 mx-4 flex justify-between">
                <div>
                    <h5 className="font-semibold text-lg">Promotions</h5>
                    <p className="text-sm text-gray-500">Some description</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">2,210 chats</p>
                    <div className="flex gap-2">
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                    </div>
                </div>
            </div>

            <div className="mt-5 mx-4 flex justify-between">
                <div>
                    <h5 className="font-semibold text-lg">Promotions</h5>
                    <p className="text-sm text-gray-500">Some description</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">2,210 chats</p>
                    <div className="flex gap-2">
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                    </div>
                </div>
            </div>

            <div className="mt-5 mx-4 flex justify-between">
                <div>
                    <h5 className="font-semibold text-lg">Promotions</h5>
                    <p className="text-sm text-gray-500">Some description</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">2,210 chats</p>
                    <div className="flex gap-2">
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                        <AiFillStar color="#FFC700" size={25} />
                    </div>
                </div>
            </div>

        </div>
    )
}