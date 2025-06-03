import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section className='bgMain relative top-0'>
                <div className='absolute inset-0 bg-GrayP opacity-70' />

                <div className='maxW relative z-10 flex items-center h-full'>
                    <article className='z-10'>
                        <p className='uppercase tracking-widest font-Rubik text-OrangeP text-center lg:text-left'>Bem vindo a Sualogo</p>
                        <h1 className='font-Mont text-white uppercase italic mt-4 text-4xl text-center lg:text-left lg:text-7xl'>Academia de <span>artes marciais</span></h1>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='text-white bg-OrangeP px-8 py-3 uppercase font-Rubik font-light text-sm tracking-wide' href="">Saiba mais</a>
                        </div>
                    </article>

                    <img className='absolute bottom-0 left-1/2 translate-x-[-50%] w-[50%] lg:right-0 lg:left-auto lg:translate-x-0 lg:w-[35%]' src="/main-personal.png" alt=""/>

                    <article className='absolute bottom-4 flex flex-col gap-4 right-6'>
                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                            <FaInstagram className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                            <FaFacebook className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>

                        <div className='border border-gray-400 cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                            <FaWhatsapp className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
