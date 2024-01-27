import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logoipsum from '../assets/logo-ipsum.svg';

export default function Navbar() {
    return (
        <div className='border-red-500 border-2 max-w-5xl left-[50%] translate-x-[-50%] fixed top-0 w-full py-4 z-50'>
            <div>
                <img src={logoipsum} alt="" className='w-[15%]' />
            </div>
        </div>
    )
}
