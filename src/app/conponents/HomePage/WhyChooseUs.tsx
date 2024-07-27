import Image from 'next/image'
import React from 'react'
import EducifyMockupLogo from '@/assets/HomeApp/images/educify-mockup.png'

const WhyChooseUs = () => {
    return (
        <div className="w-full mx-auto bg-blue-100 py-[6.5rem]">
            <div className="text-center mb-8">
                <span className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    Why Choose 
                </span>
                <span className="ml-1 text-blue-500 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    Educify?
                </span>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center px-4 sm:px-[6.5rem] gap-10">
                <div className="flex flex-col justify-around w-full lg:w-1/3">
                    <div className="w-full flex flex-col items-center gap-4 mb-4 lg:mb-0">
                        <div className="text-center text-neutral-900 text-lg sm:text-xl font-semibold">
                            Quality tutors across various subjects
                        </div>
                        <div className="text-center text-gray-700 text-sm sm:text-base font-normal">
                            We provide access to highly qualified tutors who are experts in their fields, ensuring that you receive top-notch education and support.
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-4">
                        <div className="text-center text-neutral-900 text-lg sm:text-xl font-semibold">
                            Maximize your learning
                        </div>
                        <div className="text-center text-gray-700 text-sm sm:text-base font-normal">
                            Our platform offers personalized tutoring sessions tailored to your individual needs, learning style, and pace, maximizing your learning outcomes and success.
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <Image className="w-full sm:w-[17rem] h-auto rounded-3xl border-8 border-zinc-800" src={EducifyMockupLogo} alt="Educify" />
                </div>
                <div className="flex flex-col justify-around w-full lg:w-1/3">
                    <div className="w-full flex flex-col items-center gap-4 mb-4 lg:mb-0">
                        <div className="text-center text-neutral-900 text-lg sm:text-xl font-semibold">
                            Affordable pricing and flexible scheduling
                        </div>
                        <div className="text-center text-gray-700 text-sm sm:text-base font-normal">
                            We believe that quality education should be accessible to all, which is why we offer our services at affordable prices, making it easier for students like you to access high-quality tutoring without breaking the bank.
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center gap-4">
                        <div className="text-center text-neutral-900 text-lg sm:text-xl font-semibold">
                            Trusted platform with a track record of success
                        </div>
                        <div className="text-center text-gray-700 text-sm sm:text-base font-normal">
                            We are trusted by thousands of students worldwide who have benefited from our services, achieving academic success and reaching their learning goals with our support.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
