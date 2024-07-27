import Image from 'next/image';
import React from 'react';
import MaleTutor from '@/assets/HomeApp/images/MaleTutor.svg';

const SignupAsTutor = () => {
    return (
        <div className='bg-[#3198F5] py-8 sm:py-12 md:py-16 flex flex-col md:flex-row justify-between items-center text-white'>
            <div className='px-4 sm:px-8 md:px-12 lg:px-20 w-full md:w-1/2'>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    You can be a Tutor
                </div>
                <div className="mt-4 sm:mt-5 md:mt-7 text-white text-sm sm:text-base md:text-lg font-medium">
                    Sign up with Educify and unlock your full potential as an educator. Our platform offers flexible scheduling, global reach, and unlimited earning opportunities. Don't miss out on this chance to make a lasting impact. Sign up now and start tutoring today!
                    <br/>1. Schedule tutoring according to your week/month
                    <br/>2. Offer private virtual or in-person lessons
                    <br/>3. Create a teacher-student bond
                    <br/>4. Set your own rates
                </div>
                <div className='flex flex-col sm:flex-row items-center gap-3 mt-6 sm:mt-8'>
                    <button className="text-sm sm:text-base text-black font-medium bg-[#F5AA00] py-3 px-8 sm:px-10 rounded-full">
                        Sign up as a Tutor
                    </button>
                    <div className='text-sm sm:text-base'>
                        (Get Free Profile Advert)
                    </div>
                </div>
            </div>
            <div className='w-full md:w-auto mt-8 md:mt-0'>
                <Image src={MaleTutor} alt='male tutor' className='w-full max-w-md mx-auto md:mx-0' />
            </div>
        </div>
    );
};

export default SignupAsTutor;
