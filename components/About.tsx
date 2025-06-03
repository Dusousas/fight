import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';

export default function About() {

    const services = [
        { title: 'Fight Kids', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { title: 'Fight Kids', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { title: 'Fight Kids', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { title: 'Fight Kids', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
    ];

    return (
        <>
            <section id='about' className="pb-20 pt-20 lg:pt-40">
                <div className="maxW flex flex-col-reverse gap-y-10 justify-center items-center lg:flex-row">

                    <article className="relative flex justify-center items-center lg:w-1/2">
                        <img className="border-l-3 border-OrangeP relative z-10 lg:w-[60%] " src="/about-1.jpg" alt="Background" />
                        <img className="hidden w-[60%] top-[-80px] left-[40px] z-0 lg:block lg:absolute " src="/about-1.jpg" alt="Foreground" />
                    </article>

                    <article className="lg:w-1/2">
                        <p className='uppercase tracking-widest font-Rubik text-OrangeP text-center lg:text-left'>Sobre a Sualogo</p>
                        <h1 className='text-4xl font-Mont text-black uppercase mt-4 text-center lg:text-left'>Aqui, cada treino é uma batalha vencida contra seus próprios limites.</h1>

                        <div className='mt-8 flex flex-col flex-wrap gap-10 lg:flex-row'>
                            {services.map((service, index) => (
                                <div key={index} className='flex flex-col justify-center items-center text-center lg:w-[45%] lg:justify-start lg:items-start lg:text-left'>
                                    <h1 className='flex gap-2 uppercase font-Rubik tracking-widest'>
                                        <FaCheckSquare className='text-2xl text-OrangeP' />{service.title}
                                    </h1>
                                    <p className='mt-4'>{service.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className='mt-6 border-l border-OrangeP pl-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, ipsum itaque vitae praesentium eos aliquid? Quo facilis non illo!</p>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='text-white bg-OrangeP px-8 py-3 uppercase font-Rubik font-light text-sm tracking-wide' href="">Quero começar</a>
                        </div>

                    </article>
                </div>
            </section>
        </>
    );
}

