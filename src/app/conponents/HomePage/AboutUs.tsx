import React from 'react'
import BlueDocumentLogo from '@/assets/HomeApp/images/document-text-blue.svg'
import PeopleLogo from '@/assets/HomeApp/images/people.svg'
import HandShakeLogo from '@/assets/HomeApp/images/mdi_handshake.svg'
import AntDesignLogo from '@/assets/HomeApp/images/ant-design_build-twotone.svg'
import Image from 'next/image'


const AboutUs = () => {
    return (
        <div>
            <div className="w-full py-[6.5rem] p-4 md:p-10 px-10 bg-blue-100 flex justify-end items-center relative">
                    <div className="w-full flex flex-col items-center gap-8">
                        <div className="flex flex-col items-center gap-1">
                            <div className="text-center text-3xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                Who is Educify
                                For?
                            </div>
                            <div className="text-sm md:text-base">
                                Educify is for you, if you;
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap justify-center ">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                    <Image className="w-8 h-8 bg-blue-200 rounded-full" src={BlueDocumentLogo} alt='blue document logo'/>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-semibold">
                                        Struggle with studying abroad
                                    </div>
                                    <div className="text-xs">
                                        Our quality tutors personalize your learning pace
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={PeopleLogo} alt='people logo'/>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-semibold">
                                        Face Challenges Finding High-Quality Tutors
                                    </div>
                                    <div className="text-xs">
                                        Get personalized tutoring and prep materials for SAT, ACT, or skill development. Achieve your learning goals with Educify
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                    <Image className="w-8 h-8 bg-blue-200 rounded-full" src={HandShakeLogo} alt='handshake logo'/>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-semibold">
                                        Face Academic pressure
                                    </div>
                                    <div className="text-xs">Our tutors provide personalized coaching to build study skills</div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={AntDesignLogo} alt='ant design logo'/>
                                </div>
                                <div className="text-center">
                                <div className="text-lg font-semibold">Struggle with complex concepts</div>
                                <div className="text-xs">Get expert support tailored to your needs</div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={BlueDocumentLogo} alt='blue document logo'/>
                                </div>
                                <div className="text-center">
                                <div className="text-lg font-semibold">Avoid Expensive Education</div>
                                <div className="text-xs">Explore Educify for affordable tutoring</div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={PeopleLogo} alt='people logo'/>
                                </div>
                                <div className="text-center">
                                <div className="text-lg font-semibold">Struggle to balance sports training and academics</div>
                                <div className="text-xs">Educify offers flexible tutoring sessions</div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={HandShakeLogo} alt='handshake logo'/>
                                </div>
                                <div className="text-center">
                                <div className="text-lg font-semibold">Seek Tailored tutoring for your child's learning challenges</div>
                                <div className="text-xs">Get personalized support with Educify</div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-100 rounded-3xl flex justify-center items-center">
                                <Image className="w-8 h-8 bg-blue-200 rounded-full" src={AntDesignLogo} alt='ant design logo'/>
                                </div>
                                <div className="text-center">
                                <div className="text-lg font-semibold">Are Unsatisfied with tutoring programs</div>
                                <div className="text-xs">We match your child with expert tutors who tailor lessons to meet their specific needs</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
