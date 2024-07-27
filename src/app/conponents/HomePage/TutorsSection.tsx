import React from 'react';
import TutorPic1 from '@/assets/HomeApp/images/tutor-1.png';
import TutorPic2 from '@/assets/HomeApp/images/tutor-2.png';
import TutorPic3 from '@/assets/HomeApp/images/tutor-3.png';
import TutorPic4 from '@/assets/HomeApp/images/tutor-4.png';
import TutorPic5 from '@/assets/HomeApp/images/tutor-5.png';
import Image from 'next/image';
import VerifiedLogo from '@/assets/HomeApp/images/mage_verified-check-fill.svg';
import BookLogo from '@/assets/HomeApp/images/book.svg';
import OneStarLogo from '@/assets/HomeApp/images/Star.svg';
import { IoLocationOutline } from 'react-icons/io5';

const tutors = [
    {
        id: 1,
        name: 'Devon Lane',
        image: TutorPic1
    },
    {
        id: 2,
        name: 'Bessie Cooper',
        image: TutorPic2
    },
    {
        id: 3,
        name: 'Ronald Richards',
        image: TutorPic3
    },
    {
        id: 4,
        name: 'Savannah Nguyen',
        image: TutorPic4
    },
    {
        id: 5,
        name: 'Guy Hawkins',
        image: TutorPic5
    }

]
const TutorsSection = () => {
    return (
        <div className="p-4 md:p-10">
            <div>
                <h1 className="text-center font-bold pb-10 text-lg md:text-2xl">
                    Meet 2k+ Tutors
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {/* {[...Array(5)].map((_, index) => ( */}
                    {tutors.map((_, index) => (
                        <div key={index} className="font-bold">
                            <div className="relative">
                                <Image src={_.image} className="h-full w-full object-contain rounded-2xl" alt="Tutor" />
                                <div className="absolute bottom-0 bg-[#3198F5] w-fit text-white text-xs p-2 rounded-bl-2xl rounded-tr-2xl">
                                    1st Lesson Free
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center">
                                    <h1> {_.name} </h1>
                                    <Image className="ml-1" src={VerifiedLogo} alt="verified logo" />
                                </div>
                                <div>
                                    <span>$</span>
                                    <span className="ml-1">14/h</span>
                                </div>
                            </div>
                            <div className="text-xs font-semibold mt-3">
                                <div className="flex items-center gap-2">
                                    <Image className="w-4" src={BookLogo} alt="book logo" />
                                    <div>Maths tutor</div>
                                    <Image className="w-4" src={OneStarLogo} alt="one star logo" />
                                    <div>4.6 (3.3k Reviews)</div>
                                </div>
                                <div className="flex gap-[2px] items-center mt-3">
                                    <IoLocationOutline size={16} />
                                    Online, Nigeria
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center my-16">
                <button className="bg-black rounded-full py-3 px-8 md:py-5 md:px-16 text-white">
                    Become a teacher
                </button>
            </div>
        </div>
    );
};

export default TutorsSection;
