import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import LatestIssues from "@/components/dashboard/home/LatestIssues";
import RecentInteractions from "@/components/dashboard/home/RecentInteractions";
import { closeSearchWindow } from "@/redux/slice/search/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard(){
    // recent interactions
    const tags = ['Drugs', 'Health', 'Complaint']
    const title = 'Moon fever when using Astecca'
    const description = 'I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?'
    const customers = [images.user, images.user, images.user]

    // latest issues
    const customerImg = images.user
    const customerName = 'John Doe Mike'
    const issueTitle = 'Moon fever when using Astecca'
    const issueBrief = 'Some brief cut in half description'
    const customerContributions = 189

    // search
    const searchValue = useSelector((state) => state.search.searchWord)
    const searchWindowVisible = useSelector((state) => state.search.isSearchWindowVisible)

    //
    const dispatch = useDispatch()
    return(
        <DashLayout>
            {
                searchWindowVisible === false ?

                <div>
                    <h2 className="text-3xl">Recently interacted</h2>

                    <div className="mt-6 flex gap-8">
                        <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                        <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                        <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                    </div>

                    <h2 className="text-3xl mt-6">Latest Issues</h2>

                    <div className='mt-6 space-y-4'>
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                        <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                    </div>
                </div> :

                <div className="h-full overflow-hidden relative">
                    
                    <div className="z-10">
                        <h2 className="text-3xl">Recently interacted</h2>

                        <div className="mt-6 flex gap-8">
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                        </div>

                        <h2 className="text-3xl mt-6">Latest Issues</h2>

                        <div className='mt-6 space-y-4'>
                            <LatestIssues customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                            <LatestIssues />
                            <LatestIssues />
                            <LatestIssues />
                            <LatestIssues />
                            <LatestIssues />
                            <LatestIssues />
                            <LatestIssues />
                        </div>
                    </div>

                    <div className='bg-gray-200 z-20 h-full w-full absolute top-0 left-0 opacity-[.98] overflow-y-scroll overflow-x-hidden'>
                        <div className="flex justify-end sticky top-0">
                            <button data-testid='close-btn' onClick={() => dispatch(closeSearchWindow())} className="bg-red-500 opacity-100 px-4 py-1 mr-4 rounded text-white font-semibold">Close</button>
                        </div>
                        
                        <div data-testid='issues-window' className="flex flex-wrap gap-4 mt-4">
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                            <RecentInteractions tags={tags} title={title} description={description} customers={customers} />
                        </div>
                    </div>
                </div>
            }
        </DashLayout>
    )
}