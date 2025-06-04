import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';

export default function Why() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW flex flex-col gap-20 lg:flex-row'>
                    <article className='lg:w-1/2 flex justify-center lg:justify-end relative'>
                        <img
                            className='h-[600px] w-[80%] object-cover border-l-3 border-OrangeP'
                            src="/why-1.jpg"
                            alt=""
                        />

                        <div className='absolute top-1/2 left-[50%] lg:left-[58%] -translate-x-1/2 -translate-y-1/2'>
                            <FaPlay className='text-6xl cursor-pointer text-white bg-GrayP border-l-3 border-OrangeP p-3 hover:bg-OrangeP hover:text-white hover:border-GrayP' />
                        </div>
                    </article>

                    <article className='lg:w-1/2'>
                        <p className='uppercase tracking-widest font-Rubik text-OrangeP text-center lg:text-left'>Por que nos escolher</p>
                        <h1 className='text-4xl font-Mont text-black uppercase mt-4 text-center italic lg:text-left'>Lute hoje. Supere sempre.</h1>

                        <article className='mt-10 flex flex-wrap gap-10'>
                            <div className='lg:w-[46%]'>
                                <GiBoxingGlove className='bg-OrangeP text-white p-2 text-4xl' />
                                <h1 className='uppercase font-Rubik tracking-widest mt-4 font-semibold'>Best Coaching</h1>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className='lg:w-[46%]'>
                                <GiBoxingGlove className='bg-OrangeP text-white p-2 text-4xl' />
                                <h1 className='uppercase font-Rubik tracking-widest mt-4 font-semibold'>Best Coaching</h1>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className='lg:w-[46%]'>
                                <GiBoxingGlove className='bg-OrangeP text-white p-2 text-4xl' />
                                <h1 className='uppercase font-Rubik tracking-widest mt-4 font-semibold'>Best Coaching</h1>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>

                            <div className='lg:w-[46%]'>
                                <GiBoxingGlove className='bg-OrangeP text-white p-2 text-4xl' />
                                <h1 className='uppercase font-Rubik tracking-widest mt-4 font-semibold'>Best Coaching</h1>
                                <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </article>
                        <p className='mt-10 border-l-3 border-OrangeP pl-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, ipsum itaque vitae praesentium eos aliquid? Quo facilis non illo!</p>

                    </article>
                </div>
            </section>
        </>
    );
}