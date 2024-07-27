import React from 'react'
import ExploreLogo from '@/assets/HomeApp/images/exploree.svg'
import Image from 'next/image'
const Explore = () => {
    return (
        <>
            <div className=' bg-black py-[6.5rem]'>
                <div className="text-white text-3xl font-bold text-center px-10 ">What do you need help with?</div>
                <Image src={ExploreLogo} alt='' className='mt-14 ' />
                <div className='flex justify-center items-center'>
                    <button className=" px-20 py-4 mt-14 bg-white rounded-3xl shadow text-neutral-900 text-base font-semibold">
                        Explore all our Classes
                    </button>
                </div>
                
            </div>
            
        </>
    )
}

export default Explore
