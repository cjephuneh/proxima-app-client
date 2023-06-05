export default function Billing(){
    return (
        <div className="space-y-3">
            <h3 className="text-xl font-semibold">Billing</h3>
            <div className="bg-white p-4 rounded flex flex-col space-y-2">
                <p className="font-semibold">Payment options</p>

                <div className="">
                    <div className="flex gap-3">
                        <input type="radio" name="payment" value="credit" />
                        <label>Credit card</label>
                    </div>
                    <p className="text-gray-500">1234 **** **** **** ****</p>
                </div>

                <div className="">
                    <div className="flex gap-3">
                        <input type="radio" name="payment" value="mobile" />
                        <label>Mobile</label>
                    </div>
                    <p className="text-gray-500">+254 712 345 ***</p>
                </div>
            </div>
        </div>
    )
}