// import React from 'react'
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// const faq = [
//     {
//         title: `How can I access the educational materials and resources on the platform?`,
//         content: `To access the educational materials and resources on the platform, simply log in to your Educify account and navigate to the "Resources" or "Library" section. Here, you'll find a wide range of materials, including interactive lessons, study guides, practice quizzes, and more.`
//     },
//     {
//         title: `Are the classes and study materials tailored to my specific learning needs and goals?`,
//         content: `Yes, all classes and study materials on the platform are designed to be personalized to your specific learning needs and goals. Our platform utilizes adaptive learning technology to tailor content based on your performance and progress, ensuring an optimal learning experience.`
//     },
//     {
//         title: `Can I interact with tutors and instructors for personalized assistance and feedback?`,
//         content: `Absolutely. Educify offers various communication channels, including messaging, video calls, and virtual classrooms, where you can interact with tutors and instructors for personalized assistance, feedback, and guidance throughout your learning journey.`
//     },
//     {
//         title: `What types of assessments and progress tracking tools are available?`,
//         content: `Educify provides a variety of assessment tools, including quizzes, tests, and assignments, to measure your progress and understanding of the material. Additionally, our platform offers detailed progress tracking features, allowing you to monitor your performance and identify areas for improvement.`
//     },
//     {
//         title: `Is the platform user-friendly and easy to navigate?`,
//         content: `Yes, the Educify platform is designed to be user-friendly and easy to navigate. Our intuitive interface and clear layout make it simple for users to find and access the resources and features they need quickly and efficiently.`
//     },
//     {
//         title: `Are there opportunities for collaborative learning and peer interaction?`,
//         content: `Certainly. Educify encourages collaborative learning and peer interaction through features such as group discussions, study groups, and collaborative projects. These opportunities allow you to engage with your peers, share ideas, and learn from one another.`
//     },
//     {
//         title: `How does the platform ensure the security and privacy of my personal information?`,
//         content: `Educify takes the security and privacy of your personal information seriously. We employ robust security measures, including encryption, secure authentication protocols, and regular security audits, to safeguard your data and ensure it remains protected at all times.`
//     },
//     {
//         title: `Can I access the platform from multiple devices, such as smartphones, tablets, and computers?`,
//         content: `Yes, you can access the Educify platform from multiple devices, including smartphones, tablets, and computers. Our platform is fully responsive and compatible with all major operating systems and web browsers, allowing you to learn anytime, anywhere.`
//     },
//     {
//         title: `Are there any additional costs or hidden fees associated with using the platform?`,
//         content: `No, there are no additional costs or hidden fees associated with using the Educify platform. Once you sign up and create an account, you'll have access to all the features and resources included in your subscription plan at no extra cost.`
//     },
//     {
//         title: `What kind of technical support and customer service does the platform offer?`,
//         content: `Educify provides comprehensive technical support and customer service to assist you with any questions, issues, or concerns you may have. Our dedicated support team is available via email, live chat, and phone to provide prompt and helpful assistance whenever you need it.`
//     },
    
// ]

// const FaqSection = () => {
//     return (
//         <>
//             <div className='p-[6.5rem]'>
//                 <div className="text-center text-4xl font-normal leading-10">
//                     FAQs
//                 </div>
//                 <div className=' mt-5'>
//                     <Accordion type="single" collapsible className="w-full">
//                         <AccordionItem value="item-1">
//                             {
//                                 faq.map((_, index) => (
//                                     <>
//                                         <AccordionTrigger>
//                                             {_.title}
//                                         </AccordionTrigger>
//                                         <AccordionContent>
//                                             {_.content}
//                                         </AccordionContent>
//                                     </>
//                                 ))
//                             }
//                         </AccordionItem>
//                     </Accordion>
//                 </div>
//             </div>
//             <div className='bg-[#F1F1F9] pt-16 py- flex justify-center'>
//                 <button className='bg-[#9193A5] py-7 px-10 rounded-3xl text-2xl text-white'>
//                     Browse our tutors by preference
//                 </button>
//             </div>
//         </>
//     )
// }

// export default FaqSection





import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
    {
        id: 1,
        title: `How can I access the educational materials and resources on the platform?`,
        content: `To access the educational materials and resources on the platform, simply log in to your Educify account and navigate to the "Resources" or "Library" section. Here, you'll find a wide range of materials, including interactive lessons, study guides, practice quizzes, and more.`
    },
    {
        id: 2,
        title: `Are the classes and study materials tailored to my specific learning needs and goals?`,
        content: `Yes, all classes and study materials on the platform are designed to be personalized to your specific learning needs and goals. Our platform utilizes adaptive learning technology to tailor content based on your performance and progress, ensuring an optimal learning experience.`
    },
    {
        id: 3,
        title: `Can I interact with tutors and instructors for personalized assistance and feedback?`,
        content: `Absolutely. Educify offers various communication channels, including messaging, video calls, and virtual classrooms, where you can interact with tutors and instructors for personalized assistance, feedback, and guidance throughout your learning journey.`
    },
    {
        id: 4,
        title: `What types of assessments and progress tracking tools are available?`,
        content: `Educify provides a variety of assessment tools, including quizzes, tests, and assignments, to measure your progress and understanding of the material. Additionally, our platform offers detailed progress tracking features, allowing you to monitor your performance and identify areas for improvement.`
    },
    {
        id: 5,
        title: `Is the platform user-friendly and easy to navigate?`,
        content: `Yes, the Educify platform is designed to be user-friendly and easy to navigate. Our intuitive interface and clear layout make it simple for users to find and access the resources and features they need quickly and efficiently.`
    },
    {
        id: 6,
        title: `Are there opportunities for collaborative learning and peer interaction?`,
        content: `Certainly. Educify encourages collaborative learning and peer interaction through features such as group discussions, study groups, and collaborative projects. These opportunities allow you to engage with your peers, share ideas, and learn from one another.`
    },
    {
        id: 7,
        title: `How does the platform ensure the security and privacy of my personal information?`,
        content: `Educify takes the security and privacy of your personal information seriously. We employ robust security measures, including encryption, secure authentication protocols, and regular security audits, to safeguard your data and ensure it remains protected at all times.`
    },
    {
        id: 8,
        title: `Can I access the platform from multiple devices, such as smartphones, tablets, and computers?`,
        content: `Yes, you can access the Educify platform from multiple devices, including smartphones, tablets, and computers. Our platform is fully responsive and compatible with all major operating systems and web browsers, allowing you to learn anytime, anywhere.`
    },
    {
        id: 9,
        title: `Are there any additional costs or hidden fees associated with using the platform?`,
        content: `No, there are no additional costs or hidden fees associated with using the Educify platform. Once you sign up and create an account, you'll have access to all the features and resources included in your subscription plan at no extra cost.`
    },
    {
        id: 10,
        title: `What kind of technical support and customer service does the platform offer?`,
        content: `Educify provides comprehensive technical support and customer service to assist you with any questions, issues, or concerns you may have. Our dedicated support team is available via email, live chat, and phone to provide prompt and helpful assistance whenever you need it.`
    },
    
]

const FaqSection = () => {
    return (
        <>
            <div className='lg:p-[6.5rem] p-5'>
                <div className="text-center text-4xl font-normal leading-10">
                    FAQs
                </div>
                <div className=' mt-5'>
                    <Accordion type="single" collapsible className="w-full">
                        {
                            faq.map((_, index) => (
                                <>
                                    <AccordionItem value={_.id}>
                                        <AccordionTrigger>
                                            {_.title} 
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {_.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                </>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
            <div className='bg-[#F1F1F9] pt-16 py- flex justify-center px-10'>
                <button className='bg-[#9193A5] py-7 px-10 rounded-3xl text-2xl text-white'>
                    Browse our tutors by preference
                </button>
            </div>
        </>
    )
}

export default FaqSection
