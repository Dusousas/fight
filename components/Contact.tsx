import React from 'react';
import Form from './subc/Form';
import { IoIosPin } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Maps from './subc/Maps';

export default function Contact() {


    return (
        <>
            <section id='contato' className=" pt-20 lg:pt-40">
                <div className="maxW flex flex-col-reverse gap-y-10 gap-x-10 lg:flex-row">

                    <article className="lg:w-1/2">
                        <p className='uppercase tracking-widest text-OrangeP text-center lg:text-left'>Contato</p>
                        <h1 className='text-4xl text-black uppercase mt-4 text-center lg:text-left'>Para mais informações</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore earum veritatis non voluptatum blanditiis impedit asperiores deserunt vitae quaerat!</p>
                        <div className='mt-6 flex flex-col gap-4'>
                            <p className='flex items-center gap-4 uppercase'><IoIosPin className='bg-OrangeP text-white text-4xl px-2' />Avenida das Nações unidas, 276 - Bela Vista. São Paulo - SP</p>
                            <p className='flex items-center gap-4 uppercase'><FaPhone className='bg-OrangeP text-white text-4xl px-2' />11 1234 - 1234</p>
                        </div>

                        <div className='flex mt-6 gap-4'>
                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500/25 group'>
                                <FaInstagram className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>

                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/25 group'>
                                <FaFacebook className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>

                            <div className='bg-OrangeP cursor-pointer p-2 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 group'>
                                <FaWhatsapp className='text-gray-200 text-lg group-hover:text-white transition-colors duration-300' />
                            </div>
                        </div>
                    </article>

                    <article className='lg:w-1/2'>
                        <Form />
                    </article>
                </div>
                    <Maps />

            </section>
        </>
    );
}

