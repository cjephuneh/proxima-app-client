import DashLayout from "@/components/dashboard/DashLayout";
import ChatWindow from "@/components/dashboard/tickets/ChatWindow";
import Configuration from "@/components/dashboard/tickets/Configuration";
import Menu from "@/components/dashboard/tickets/Menu";
import MessagesList from "@/components/dashboard/tickets/MessagesList";
import { messages } from "@/components/dashboard/tickets/ticketsPageData";

export default function Tickets(){
    return (
        <DashLayout>
            <div className="w-full h-full overflow-hidden">
                <h1 className="font-semibold text-2xl">All Tickets</h1>
                <div className="mt-5 flex gap-6 h-full">
                    <Menu />
                    <MessagesList messages={messages} />
                    <ChatWindow messages={messages} />
                    <Configuration />
                </div>
            </div>
        </DashLayout>
    )
}