import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import IssueCard from "@/components/dashboard/home/IssueCard";
import LatestSurveys from "@/components/dashboard/home/LatestSurveys";
import RecentInteractions from "@/components/dashboard/home/RecentInteractions";
import { closeSearchWindow } from "@/redux/slice/search/searchSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "@/redux/slice/search/searchSlice";


export default function Dashboard(){
    const recentlyInteracted = [
        {
            tags: ['Drugs', 'Health', 'Complaint'],
            title: 'Moon fever when using Astecca',
            description: 'I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?',
        },
        {
            tags: ['Beauty', 'Skin', 'Complaint'],
            title: 'Rash after using Glowsy face cream',
            description: 'I noticed a rash on my face after using your Glowsy face cream. Could it be that one of the ingredients is causing an allergic reaction?',
        },
        {
            tags: ['Food', 'Allergy', 'Complaint'],
            title: 'Nuts in Granola bars',
            description: 'I have a severe nut allergy, but I found nuts in your granola bars even though the packaging did not mention it. This could have been very dangerous for me.',
        },
        {
            tags: ['Electronics', 'Battery', 'Complaint'],
            title: 'Battery dies quickly in new smartphone',
            description: 'I just bought your new smartphone and I noticed that the battery dies very quickly. Is this a known issue?',
        },
        // {
        //     tags: ['Clothing', 'Quality', 'Complaint'],
        //     title: 'Torn stitching on new shirt',
        //     description: 'I bought a new shirt from your store, but the stitching on the sleeve came apart after just one wear. I would like a refund or a replacement.',
        // }
    ];

    const issues = [
        {
            customerName: 'Mary Anne Smith',
            issueTitle: 'Device overheating',
            issueBrief: 'My device gets very hot after using it for just a few minutes, and then it shuts down. I am concerned that this might be a safety hazard.',
            customerContributions: 27
        },
        {
            customerName: 'David Lee Wang',
            issueTitle: 'Battery drain too fast',
            issueBrief: 'The battery on my device seems to drain much faster than it should. Even when I am not using it, the battery percentage goes down quickly.',
            customerContributions: 54
        },
        {
            customerName: 'Nancy Wu Kim',
            issueTitle: 'Product not working as advertised',
            issueBrief: 'I purchased your product based on the features advertised on your website, but many of these features do not seem to work or do not work as expected.',
            customerContributions: 12
        },
        {
            customerName: 'Alex Brown Taylor',
            issueTitle: 'Unresponsive touch screen',
            issueBrief: 'The touch screen on my device does not respond to my touch in certain areas, or it responds incorrectly. This makes it difficult to use some features of the device.',
            customerContributions: 39
        },
        {
            customerName: 'Karen Johnson Williams',
            issueTitle: 'Poor sound quality',
            issueBrief: 'The sound quality on my device is very poor, even when I use headphones. It is difficult to hear music or other audio clearly.',
            customerContributions: 81
        },
        {
            customerName: 'William Chen Davis',
            issueTitle: 'Connectivity issues with Wi-Fi',
            issueBrief: 'My device has trouble connecting to Wi-Fi networks, or it disconnects frequently. This makes it difficult to use certain features of the device that require internet access.',
            customerContributions: 65
        },
        {
            customerName: 'Emily Kim Jones',
            issueTitle: 'Screen freezes or crashes',
            issueBrief: 'The screen on my device sometimes freezes or becomes unresponsive, and sometimes the device crashes and needs to be restarted. This makes it difficult to use the device reliably.',
            customerContributions: 23
        },
        {
            customerName: 'Michael Lee Park',
            issueTitle: 'Compatibility issues with other devices',
            issueBrief: 'My device has trouble connecting to other devices, or it cannot communicate with them correctly. This makes it difficult to use the device with other devices I own.',
            customerContributions: 46
        },
        {
            customerName: 'Sarah Davis Brown',
            issueTitle: 'Difficulty using software features',
            issueBrief: 'I am having trouble using some of the software features on my device, such as configuring settings or accessing certain menus. The user manual is not helpful in explaining these features.',
            customerContributions: 19
        },
        {
            customerName: 'Robert Wilson Kim',
            issueTitle: 'Device is slow or unresponsive',
            issueBrief: 'My device runs very slowly or becomes unresponsive when I try to use certain features or apps. This makes it frustrating to use the device.',
            customerContributions: 33
        },
        {
            customerName: 'Lisa Brown Wang',
            issueTitle: 'Product durability issues',
            issueBrief: 'After just a few months of use, my device is showing signs of wear and tear, such as scratches or cracks. I am concerned that the device will not last as long as I expected it to.',
            customerContributions: 7
        },
        {
            customerName: 'Kevin Davis Lee',
            issueTitle: 'Security concerns',
            issueBrief: 'I am concerned about the security of my device and the information stored on it. I have heard about data breaches and other security issues with similar devices, and I want to make sure that my device is secure.',
            customerContributions: 92
        },
        {
            customerName: 'Jenny Kim Wilson',
            issueTitle: 'Product defects',
            issueBrief: 'My device has a defect that prevents it from working correctly, even after trying to troubleshoot the issue. I would like to exchange the device for a new one or receive a refund.',
            customerContributions: 14
        }
    ]; 
    
    const issuesList = [
        {
          tags: ["Quality", "Shipping", "Customer Service"],
          image: "https://example.com/images/issue1.jpg",
          title: "Product arrived damaged",
          description: "I received the product, but it was damaged during shipping. I tried contacting customer service, but have not received a response yet.",
          upvotes: 10
        },
        {
          tags: ["Technical", "Pricing", "Customer Service"],
          image: "https://example.com/images/issue2.jpg",
          title: "Unable to complete purchase",
          description: "I tried to purchase the product, but the website kept giving me error messages. I checked my payment information and it was correct. I contacted customer service, but have not received a response yet.",
          upvotes: 34
        },
        {
          tags: ["Quality", "Design", "Pricing"],
          image: "https://example.com/images/issue3.jpg",
          title: "Product does not match description",
          description: "I purchased the product based on the description, but when it arrived it did not match the description. Additionally, the quality of the product is lower than expected for the price.",
          upvotes: 23,
        },
        {
          tags: ["Technical", "Shipping", "Customer Service"],
          image: "https://example.com/images/issue4.jpg",
          title: "Wrong product received",
          description: "I received a product that I did not order. I tried contacting customer service, but have not received a response yet. Additionally, the product was shipped to the wrong address.",
          upvotes: 43
        },
        {
          tags: ["Quality", "Design", "Pricing"],
          image: "https://example.com/images/issue5.jpg",
          title: "Product fell apart",
          description: "The product fell apart after only a few uses. The design seems to be flawed and the quality is poor for the price.",
          upvotes: 12
        }
      ];

    const dispatch = useDispatch()

    const [sortedIssues, setSortedIssues] = useState(issuesList)
    const [selectedSortRule, setSelectedSortRule] = useState('none')
    const [searchIssuesResult, setSearchIssuesResult] = useState(sortedIssues)

    const sortIssuesByUpvote = (sortRule) => {
        setSelectedSortRule(sortRule)

        if(sortRule === 'most_upvotes'){
            setSortedIssues(issuesList.sort((a, b) => b.upvotes - a.upvotes))
        } 
        else if(sortRule === 'least_upvotes'){
            setSortedIssues(issuesList.sort((a, b) => a.upvotes - b.upvotes))
        }
        else{
            setSortedIssues(issuesList)
        }
        
    }

    // search
    const searchValue = useSelector((state) => state.search.searchWord)
    
    const searchIssues = () => {
        const searchResults = sortedIssues.filter(issue => issue.title.toLowerCase().includes(searchValue.toLowerCase()));
        setSearchIssuesResult(searchResults)
    }

    useEffect(() => {
        searchIssues()
    }, [searchValue, selectedSortRule])
    
    // recent interactions
    const tags = ['Drugs', 'Health', 'Complaint']
    const title = 'Moon fever when using Astecca'
    const description = 'I’ve been getting mild fever symptoms whenever am using any of your drugs. Could it be that am having an allergic reaction to the silicon casings?'
    const customers = [images.user, images.user, images.user]

    // latest issues
    const customerImg = images.user

    const searchWindowVisible = useSelector((state) => state.search.isSearchWindowVisible)

    //
    return(
        <DashLayout>
            {
                searchWindowVisible === false ?

                <div>
                    <h2 className="text-2xl">Recently interacted</h2>

                    <div className="mt-6 flex gap-8">
                        {
                            recentlyInteracted.map(({tags, title, description}, i) => (
                                <RecentInteractions key={i} tags={tags} title={title} description={description} customers={customers} />
                            ))
                        }
                    </div>

                    <div className="mt-6 flex items-center gap-12">
                        <h2 className="text-2xl">Surveys</h2>
                        <select className="text-sm font-semibold bg-transparent">
                            <option value="One Week Ago">One Week Ago</option>
                            <option value="Two Weeks Ago">Two Weeks Ago</option>
                            <option value="One Month Ago">One Month Ago</option>
                        </select>
                    </div>

                    <div className='mt-6 space-y-4'>
                        {
                            issues.map(({customerName, issueTitle, issueBrief, customerContributions},i) => (
                                <LatestSurveys key={i} customerImg={customerImg} customerName={customerName} issueTitle={issueTitle} issueBrief={issueBrief} customerContributions={customerContributions} />
                            ))
                        }
                    </div>
                </div> :

                <div className="h-full overflow-hidden relative">
                    <div className='bg-gray-100 p-4 z-20 h-full w-full absolute top-0 left-0 opacity-[.98] overflow-y-scroll overflow-x-hidden'>
                        <div className="flex justify-end sticky top-0">
                            <button data-testid='close-btn' onClick={() => {
                                    dispatch(setSearchValue(''))
                                    dispatch(closeSearchWindow())
                                }}
                                className="bg-red-500 opacity-100 px-4 py-1 mr-4 rounded text-white font-semibold"
                            >Close</button>
                        </div>

                        {/* filters */}
                        <div className="mt-6 flex justify between">
                            <h5 className="font-semibold text-lg w-1/3">Filters</h5>

                            <div className="w-1/3 flex flex-col">
                                <label className="text-lg font-semibold">Sort by:</label>
                                <select className="w-fit px-4 py-2 rounded" value={selectedSortRule} onChange={(e) => sortIssuesByUpvote(e.target.value)}>
                                    <option value="none">None</option>
                                    <option value="most_upvotes">Most upvotes</option>
                                    <option value="least_upvotes">Least upvotes</option>
                                </select>
                            </div>

                            <div className="w-1/3 flex flex-col">
                                <label className="text-lg font-semibold">Filter by:</label>
                                <select className="w-fit px-4 py-2 rounded">
                                    <option value="none">None</option>
                                    <option value="one week ago">One week ago</option>
                                    <option value="two week ago">Two weeks ago</option>
                                </select>
                            </div>
                        </div>
                        
                        <div data-testid='issues-window' className="flex flex-wrap gap-4 mt-12">
                            {
                                searchIssuesResult.map((issue, id) => (
                                    <IssueCard key={id} issue={issue} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </DashLayout>
    )
}