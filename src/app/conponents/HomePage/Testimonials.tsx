import Image from 'next/image'
import React from 'react'
import Testimonial from '@/assets/HomeApp/images/testimonials.png'

const Testimonials = () => {
    return (
        <>
            <div className='bg-black  pt-[6.5rem] pb-[3.25rem]'>
                <div className='text-center px-10'>
                    <div className="text-center text-gray-400 text-2xl font-bold leading-10">
                        What our students say
                    </div>
                    <div className="text-white text-base mt-3">
                        Seamless Learning, Effortlessly Yours Today
                    </div>
                </div>
                <Image className='mt-3 w-full' src={Testimonial} alt='testimonials logo'/>
                
            </div>
            {/* <div className='bg-[rgba(250, 253, 255, 0.2)]'> */}
            <div className='bg-black'>
                <div className="px-4 md:px-24 py-16 bg-slate-50/20 shadow flex flex-col justify-center items-center gap-11">
                    <div className="text-center text-white text-lg md:text-4xl font-normal leading-10">
                        <span>By using Educify web learning platform to redefine your educational journey for </span>
                        <span className="text-blue-500">success</span>
                        <span>, we can help you with personalized tutoring for test preparation, streamline your learning processes, ensure precise management of tutors and </span>
                        <span className="text-blue-500">educational resources</span>
                        <span>. Say goodbye to uncertainty and hello to academic success with us.</span>
                    </div>
                    <div className="w-full md:w-80 px-6 py-4 bg-blue-500 rounded-3xl shadow justify-center items-center inline-flex">
                        <div className="text-center text-white text-base font-medium">Sign Up</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials

