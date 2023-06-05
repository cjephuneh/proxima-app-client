import DashLayout from "@/components/dashboard/DashLayout";
import Billing from "@/components/dashboard/settings/Billing";
import EmployeeManagement from "@/components/dashboard/settings/EmployeeManagement";
import KYC from "@/components/dashboard/settings/KYC";
import Resources from "@/components/dashboard/settings/Resources";
import { useState } from "react";

export default function Settings(){
    const [currentView, setCurrentView] = useState('billing')
    return (
        <DashLayout>
            <div className="flex gap-7">
                <div className="bg-white h-fit p-4 rounded flex flex-col">
                    <button 
                        onClick={() => setCurrentView('billing')} 
                        className={currentView == 'billing' ? "text-left w-full text-[#53B4B0] px-4 py-2 cursor-pointer" : "text-left w-full px-4 py-2 cursor-pointer"}
                    >Billing</button>

                    <button 
                        onClick={() => setCurrentView('employee')} 
                        className={currentView == 'employee' ? "text-left w-full text-[#53B4B0] px-4 py-2 cursor-pointer" : "text-left w-full px-4 py-2 cursor-pointer"}
                    >Employee management</button>

                    <button 
                        onClick={() => setCurrentView('resources')} 
                        className={currentView == 'resources' ? "text-left w-full text-[#53B4B0] px-4 py-2 cursor-pointer" : "text-left w-full px-4 py-2 cursor-pointer"}
                    >Resources</button>

                    <button 
                        onClick={() => setCurrentView('kyc')} 
                        className={currentView == 'kyc' ? "text-left w-full text-[#53B4B0] px-4 py-2 cursor-pointer" : "text-left w-full px-4 py-2 cursor-pointer"}
                    >Verification center</button>
                </div>

                <div className="flex-1">
                    { currentView === 'billing' && <Billing /> }
                    { currentView === 'employee' && <EmployeeManagement /> }
                    { currentView === 'resources' && <Resources /> }
                    { currentView === 'kyc' && <KYC /> }
                </div>
            </div>
        </DashLayout>
    )
}