import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='py-4 absolute z-20 w-full bg-GrayP/60'>
                <div className='maxW flex justify-between items-center'>
                    <a className='uppercase text-2xl font-Vast text-white' href="">Sua<span className='font-semibold text-OrangeP'>Logo</span></a>
                    <Navbar />
                </div>
            </header>
        </>
    );
}