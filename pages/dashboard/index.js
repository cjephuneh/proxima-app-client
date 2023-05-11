import images from "@/assets/images";
import DashLayout from "@/components/dashboard/DashLayout";
import LatestSurveys from "@/components/dashboard/home/LatestSurveys";
import RecentInteractions from "@/components/dashboard/home/RecentInteractions";

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

    const customers = [images.user, images.user, images.user]

    const customerImg = images.user

    return(
        <DashLayout>
            <div>
                <h2 className="text-2xl">Recently Interacted</h2>

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
            </div>
        </DashLayout>
    )
}