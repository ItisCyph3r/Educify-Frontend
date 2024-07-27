import React, { useState, useEffect, useRef } from 'react';
import { CgProfile } from 'react-icons/cg';

const ProfileDropdown = () => {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleProfileMenu = () => {
        setOpenProfileMenu(!openProfileMenu);
    };

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenProfileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex gap-4 items-center rounded-3xl border border-gray-200 p-2 relative'>
            <CgProfile size={28} onClick={toggleProfileMenu} />
            {openProfileMenu && (
                <div ref={dropdownRef} className="absolute top-10 right-1 mt-2 mx-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Login</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lessons</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;
