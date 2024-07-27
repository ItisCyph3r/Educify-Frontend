'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import HeroSectionImage from '@/assets/HomeApp/images/hero-section.svg';
import SearchLogo from '@/assets/HomeApp/images/search-normal.svg';
import LocationLogo from '@/assets/HomeApp/images/location.svg';
import FiveStarLogo from '@/assets/HomeApp/images/stars-5 1.svg';
import OneStarLogo from '@/assets/HomeApp/images/Shape.svg';

export default function HeroSection() {
    const [isClassSearchDropdownVisible, setIsClassSearchDropdownVisible] = useState(false);
    const [isClassLocationDropdownVisible, setIsClassLocationDropdownVisible] = useState(false);
    const [classSearchInput, setClassSearchInput] = useState('');
    const [classLocationInput, setClassLocationInput] = useState('');

    const handleClassSelect = (item: any) => {
        setClassSearchInput(item);
        setIsClassSearchDropdownVisible(false);
    };

    const handleClassLocationSelect = (item: any) => {
        setClassLocationInput(item);
        setIsClassLocationDropdownVisible(false);
    };

    return (
        <div className="px-4 sm:px-6 md:px-20 py-12 sm:py-16 md:py-20 bg-blue-100 flex flex-col md:flex-row justify-center items-center gap-2.5">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-16">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-8 lg:w-1/2 w-full">
                    <div className="text-center md:text-left">
                        <div className="text-neutral-900 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                            Achieve Your Goals with <span className="text-sky-800">Personalized </span> Learning!
                        </div>
                    </div>
                    <div className="text-center md:text-left text-gray-700 text-lg sm:text-xl md:text-2xl font-normal">
                        Experience engaging and effective lessons and courses.
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-8">
                        <div className="w-full bg-white px-2 py-4 md:py-0 rounded-3xl border-4 border-gray-700/20 lg:flex justify-between items-center relative">
                            <div className="flex justify-start items-center gap-2 py-2 w-full relative">
                                <div className="w-5 h-5">
                                    <Image src={SearchLogo} alt='search logo' className="w-5 h-5" />
                                </div>
                                <input 
                                    className="text-gray-700 text-base font-normal py-2 focus:outline-none md:w-full w-full rounded-3xl p-2"
                                    placeholder='Search for a class'
                                    value={classSearchInput}
                                    onFocus={() => setIsClassSearchDropdownVisible(true)}
                                    onBlur={() => setTimeout(() => setIsClassSearchDropdownVisible(false), 100)}
                                    onChange={(e) => setClassSearchInput(e.target.value)}
                                />
                                {isClassSearchDropdownVisible && (
                                    <div className="absolute top-14 mt-2 mx-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassSelect('Class 1')}>Online</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassSelect('Class 2')}>Location</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassSelect('Class 3')}>Tutor's Location</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-start items-center gap-2 py-2 w-full relative">
                                <div className="w-5 h-5">
                                    <Image src={LocationLogo} alt='location logo' className="w-5 h-5" />
                                </div>
                                <input 
                                    className="text-gray-700 text-base font-normal focus:outline-none py-2 w-full rounded-3xl p-2"
                                    placeholder='Class location'
                                    value={classLocationInput}
                                    onFocus={() => setIsClassLocationDropdownVisible(true)}
                                    onBlur={() => setTimeout(() => setIsClassLocationDropdownVisible(false), 100)}
                                    onChange={(e) => setClassLocationInput(e.target.value)}
                                />
                                {isClassLocationDropdownVisible && (
                                    <div className="absolute top-14 mt-2 mx-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassLocationSelect('Class Location 1')}>Class Location 1</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassLocationSelect('Class Location 2')}>Class Location 2</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onMouseDown={() => handleClassLocationSelect('Class Location 3')}>Class Location 3</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="px-6 py-2 mt-2 md:mt-0 bg-blue-500 rounded-3xl shadow flex justify-center items-center">
                                <button className="text-white text-base font-medium">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-3">
                            <div className="text-neutral-900 text-base font-normal leading-relaxed">
                                Excellent
                            </div>
                            <div className="w-28 h-5 relative">
                                <Image src={FiveStarLogo} alt='five star logo' className="w-28 h-5" />
                            </div>
                            <div>
                                <span className="text-neutral-900 text-base font-bold leading-relaxed">
                                    436 
                                </span>
                                <span className="text-neutral-900 text-base font-normal leading-relaxed ml-1">
                                    reviews on
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Image src={OneStarLogo} alt='one star logo' className="w-5 h-5" />
                                <div className="text-neutral-900 text-base font-bold leading-relaxed">
                                    Trustpilot
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center gap-4">
                    <div className="w-full">
                        <Image 
                            className="top-0 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-xl" 
                            src={HeroSectionImage} 
                            alt='hero section image'
                        />
                    </div>
                    <div className="text-neutral-900 text-sm md:text-base font-bold flex justify-center mt-5 items-center">
                        Join 500,000+ students
                    </div>
                </div>
            </div>
        </div>
    );
}
