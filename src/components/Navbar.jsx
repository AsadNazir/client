import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logoipsum from '../assets/logo-ipsum.svg';

export default function Navbar() {
    return (
        <div className=''>
            <div>
                <img src={logoipsum} alt="" className='w-[20%] md:w-[15%] lg:w-[12%]' />
            </div>
        </div>
    )
}
