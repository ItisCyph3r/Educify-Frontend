import Image from 'next/image'
import React from 'react'
import RegFlowLogo from '@/assets/HomeApp/images/Frame 95599.png'

const RegistrationFlow = () => {
    return (
        <div className='bg-[#075092]'>
            <div className='p-7 md:p-[6.5rem]'>
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-10 mb-4">How to Register</div>
                <Image src={RegFlowLogo} className='' alt=''/>
                <div className='flex justify-center mt-7'>
                    <button className="px-8 py-2 sm:px-12 sm:py-3 md:px-16 md:py-4 lg:px-20 lg:py-4 mt-5 md:mt-14 bg-white rounded-3xl shadow text-neutral-900 text-base font-semibold">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationFlow
