"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { PiGlobeBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "@/assets/HomeApp/images/educify-logo.png";
import MathIcon from '@/assets/HomeApp/images/tabler_math.svg';
import GymIcon from '@/assets/HomeApp/images/iconoir_gym.svg';
import LanguageIcon from '@/assets/HomeApp/images/ion_language-outline.svg';
import ExaminationIcon from '@/assets/HomeApp/images/document-text.svg';
import CookingIcon from '@/assets/HomeApp/images/icon-park-outline_cook.svg';
import LifeIcon from '@/assets/HomeApp/images/lucide_life-buoy.svg';
import DrivingIcon from '@/assets/HomeApp/images/driving.svg';
import ComputingIcon from '@/assets/HomeApp/images/devices.svg';
import HealthIcon from '@/assets/HomeApp/images/heart-tick.svg';
import ArtsCraftIcon from '@/assets/HomeApp/images/streamline_hand-held-tablet-drawing.svg';
import MusicIcon from '@/assets/HomeApp/images/mynaui_music.svg';
import AcademicsIcon from '@/assets/HomeApp/images/mynaui_academic-hat.svg';
import CartIcon from '@/assets/HomeApp/images/bag-2.svg'
import ProfileDropdown from '@/components/ProfileDropdown';
// import { ProfileDropdown } from '@/components/ProfileDropdown';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <div className='px-4 lg:px-10'>
            <nav className="bg-white border-gray-200">
                <div className="flex flex-wrap justify-between items-center max-w-screen-xl py-2">
                <div className='flex justify-between items-center w-full lg:w-auto'>
                    <div className='flex items-center'>
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src={Logo} className="h-8 w-auto object-contain" alt="Educify Logo" />
                        </a>
                        <div className='hidden lg:flex items-center text-base ml-8 gap-4'>
                            <div>How it works</div>
                            <div>About Us</div>
                            <div>Blog</div>
                            <button className='ml-3 bg-blue-600 rounded-3xl p-2 text-white'>Become a teacher</button>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <FaShoppingCart  className='lg:hidden block'/>
                        {/* <div className='flex gap-4 items-center rounded-3xl border border-gray-200 p-2'>
                        <CgProfile size={28} />
                        </div> */}
                        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                            <RxHamburgerMenu size={24} />
                        </button>
                    </div>
                    
                </div>
                <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
                    <div className='flex items-center'>
                    <FaPhone />
                    <a href="tel:5541251234" className="text-sm ml-2 hover:underline">(555) 412-1234</a>
                    </div>
                    {/* <div className='flex items-center'>
                    <PiGlobeBold />
                    <div className='flex items-center'>
                        <a href="#" className="text-sm ml-2 mr-1 hover:underline">EN/ USD</a>
                        <IoIosArrowDown />
                    </div>
                    </div> */}
                    <FaRegHeart />
                    <Image src={CartIcon} />
                    <ProfileDropdown />
                </div>
                </div>
                {isOpen && (
                    <>
                <div className="lg:hidden">
                    <div className="flex flex-col space-y-4 mt-2">
                    <a href="#" className="text-base">How it works</a>
                    <a href="#" className="text-base">About Us</a>
                    <a href="#" className="text-base">Blog</a>
                    <button className='bg-blue-600 rounded-3xl p-2 text-white'>Become a teacher</button>
                    <div className='flex items-center'>
                        <FaPhone />
                        <a href="tel:5541251234" className="text-sm ml-2 hover:underline">(555) 412-1234</a>
                    </div>
                    {/* <div className='flex items-center'>
                        <PiGlobeBold />
                        <div className='flex items-center'>
                        <a href="#" className="text-sm ml-2 mr-1 hover:underline">EN/ USD</a>
                        <IoIosArrowDown />
                        </div>
                    </div> */}
                    <div className='flex items-center space-x-4'>
                        {/* <FaRegHeart /> */}
                        {/* <FaShoppingCart /> */}
                        <div className='flex gap-4 items-center rounded-3xl border border-gray-200 p-2'>
                        <CgProfile size={28} />
                        </div>
                    </div>
                    </div>
                </div>
                <nav>
                    <div className='mb-3'>
                        <button className=' bg-blue-600 rounded-3xl p-2 text-white w-full'> 
                            Explore all Categories
                        </button>
                    </div>
                
                </nav>
                </>
                )}
                <nav className="hidden lg:block border-t border-gray-200 mt-2">
                    <div className="py-3 mx-auto">
                        <ul className="flex   flex-wrap justify-center lg:justify-evenly font-medium mt-0 space-x-4 lg:space-x-8 text-sm">
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={MathIcon} alt='Math icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Maths</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={GymIcon} alt='Gym icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Gym</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={LanguageIcon} alt='Language icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Language</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={ExaminationIcon} alt='Examination icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Examination</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={CookingIcon} alt='Cooking icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Cooking</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={LifeIcon} alt='Life icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Life</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={DrivingIcon} alt='Driving icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Driving</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={ComputingIcon} alt='Computing icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Computing</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={HealthIcon} alt='Health icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Health</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={ArtsCraftIcon} alt='Arts and Crafts icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Arts & Crafts</a>
                        </li>
                        <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={MusicIcon} alt='Music icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Music</a>
                        </li>
                        {/* <li className='text-center'>
                            <div className='flex justify-center'>
                            <Image src={AcademicsIcon} alt='Academics icon' />
                            </div>
                            <a href="#" className="hover:underline" aria-current="page">Academics</a>
                        </li> */}
                        <div className='mb-3'>
                            <button className=' bg-blue-600 rounded-3xl p-2 text-white w-full'> 
                                Explore all Categories
                            </button>
                        </div>
                        </ul>
                        
                    </div>
                
                
                </nav>
            </nav>
        </div>
    );
}
