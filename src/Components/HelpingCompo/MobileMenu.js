import NavLink from '@/Components/HelpingCompo/NavLink';
import React from 'react';
import { FaFax, FaHome, FaProjectDiagram, FaServicestack, FaUser, FaVoicemail } from "react-icons/fa";

const MobileMenu = () => {
    return (
        <div className='block md:hidden bg-slate-900 pt-10 text-white absolute bottom-0 left-0 w-full'>
            <ul className='flex'>
                <li className='flex-1'><NavLink href={'/'}><FaHome></FaHome></NavLink></li>
                <li className='flex-1'><NavLink href={'/about'}><FaUser></FaUser></NavLink></li>
                <li className='flex-1'><NavLink href={'/services'}><FaServicestack></FaServicestack></NavLink></li>
                <li className='flex-1'><NavLink href={'/projects'}><FaProjectDiagram></FaProjectDiagram></NavLink></li>
                <li className='flex-1'><NavLink href={'/contact'}><FaFax></FaFax> </NavLink></li>
            </ul>
        </div>
    );
};

export default MobileMenu;