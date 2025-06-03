import React from 'react';
import { FaCheck } from 'react-icons/fa';

const plans = [
    {
        name: 'Basic Training',
        price: 'R$250',
        benefits: [
            'Acesso às aulas presenciais',
            'Treinos monitorados',
            'Plano alimentar básico',
            'Avaliação física trimestral',
            'Participação em eventos internos',
        ],
    },
    {
        name: 'Advanced Training',
        price: 'R$400',
        benefits: [
            'Acesso ilimitado às aulas',
            'Treinos personalizados',
            'Plano alimentar completo',
            'Avaliação física mensal',
            'Descontos em competições',
        ],
    },
];

export default function Plans() {
    return (
        <section className='py-20 bg-[#D3CDC6] lg:h-[120vh] relative'>
            <div className='maxW flex flex-col lg:flex-row'>

                <article className='lg:pl-30 lg:w-[60%]'>
                    <p className='uppercase tracking-widest font-Rubik text-OrangeP'>Nossos pacotes</p>
                    <h1 className='text-4xl font-Mont text-GrayP uppercase mt-4'>
                        Escolha o <span className='text-OrangeP'>ideal</span> para você.
                    </h1>

                    <article className='mt-10 flex flex-col gap-10 lg:flex-row'>
                        {plans.map((plan, index) => (
                            <div key={index} className='bg-GrayP border-l-3 border-OrangeP py-20 lg:w-[400px] '>
                                <h1 className='uppercase text-white text-xl text-center'>{plan.name}</h1>
                                <div className='flex justify-center mt-4 gap-2'>
                                    <h1 className='text-2xl text-OrangeP'>{plan.price}</h1>
                                    <h1 className='uppercase text-sm text-white'>/Mês</h1>
                                </div>

                                <div className='mt-6'> {plan.benefits.map((benefit, i) => (
                                    <h1 key={i} className='flex gap-2 items-center justify-center text-white'><FaCheck className='text-OrangeP' />{benefit}</h1>))}
                                </div>

                                <div className='flex justify-center mt-6'>
                                    <a className='text-white bg-OrangeP px-8 py-3 uppercase font-Rubik font-light text-sm tracking-wide' href="#">Quero começar</a>
                                </div>
                            </div>
                        ))}
                    </article>
                    <p className='mt-10 border-l-3 border-OrangeP pl-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis, ipsum itaque vitae praesentium eos aliquid? Quo facilis non illo!</p>
                    <div className='flex mt-6'>
                        <a className='text-white bg-OrangeP px-8 py-3 uppercase font-Rubik font-light text-sm tracking-wide' href="#">Ver todos os planos</a>
                    </div>
                </article>

                <img className='hidden absolute bottom-0 lg:block lg:right-40 lg:w-[25%]' src="/plans-1.png" alt="Imagem dos planos" />
            </div>
        </section>
    );
}
