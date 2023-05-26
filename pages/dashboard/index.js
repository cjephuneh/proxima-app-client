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
          // customerName: 'Mary Anne Smith',
          date: '12-06-2023',
          surveyName: 'Product Usage Survey',
          surveyDescription: 'We would like to gather information about how customers use our product. Your insights will help us improve its functionality and user experience.',
          customerContributions: 27
        },
        {
          // customerName: 'David Lee Wang',
          date: '12-12-2022',
          surveyName: 'Battery Performance Survey',
          surveyDescription: 'We are conducting a survey to understand the battery performance of our product. Your feedback will assist us in enhancing its battery life and efficiency.',
          customerContributions: 54
        },
        {
          // customerName: 'Nancy Wu Kim',
          date: '17-01-2023',
          surveyName: 'Feature Satisfaction Survey',
          surveyDescription: 'Please take a moment to provide feedback on the features of our product. Your responses will aid us in further refining and optimizing these features.',
          customerContributions: 12
        },
        {
          // customerName: 'Alex Brown Taylor',
          date: '08-07-2023',
          surveyName: 'Touch Screen Experience Survey',
          surveyDescription: 'We are interested in gathering feedback about your experience with the touch screen on our product. Your input will help us enhance its responsiveness and accuracy.',
          customerContributions: 39
        },
        {
          // customerName: 'Karen Johnson Williams',
          date: '19-03-2023',
          surveyName: 'Audio Quality Survey',
          surveyDescription: 'We value your opinion on the audio quality of our product. Your feedback will guide us in improving the sound performance for a better audio experience.',
          customerContributions: 81
        },
        {
          // customerName: 'William Chen Davis',
          date: '29-09-2023',
          surveyName: 'Wi-Fi Connectivity Survey',
          surveyDescription: 'We are conducting a survey to gather information about the Wi-Fi connectivity experience with our product. Your responses will help us address any connectivity issues and provide a seamless online experience.',
          customerContributions: 65
        },
        {
          // customerName: 'Emily Kim Jones',
          date: '02-05-2023',
          surveyName: 'User Interface Feedback Survey',
          surveyDescription: 'Your feedback on the user interface of our product is valuable to us. Please take a moment to provide insights that will aid us in enhancing the overall user experience.',
          customerContributions: 23
        },
        {
          // customerName: 'Michael Lee Park',
          date: '15-02-2023',
          surveyName: 'Device Compatibility Survey',
          surveyDescription: 'We would like to know about your experience with device compatibility. Your feedback will assist us in ensuring seamless compatibility with a wide range of devices.',
          customerContributions: 46
        },
    ]

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
                        issues.map(({date, surveyName, surveyDescription, customerContributions},i) => (
                            <LatestSurveys key={i} customerImg={customerImg} date={date} surveyName={surveyName} surveyDescription={surveyDescription} customerContributions={customerContributions} />
                        ))
                    }
                </div>
            </div>
        </DashLayout>
    )
}