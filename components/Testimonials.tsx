import React, { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAnglesRight } from 'react-icons/fa6';

export default function Testimonials() {
    const swiperRef = useRef<SwiperType | null>(null);
    
    const testimonials = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facere enim soluta magni.',
            name: 'Lisa Sousa',
            role: 'Member',
            image: '/perfil-1.jpg'
        },
        {
            text: 'Sint excepturi impedit in libero reprehenderit. Mollitia sint excepturi impedit.',
            name: 'Carlos Silva',
            role: 'Athlete',
            image: '/perfil-1.jpg'
        },
        {
            text: 'Odit nemo sint! Mollitia sint excepturi impedit in libero reprehenderit.',
            name: 'Ana Costa',
            role: 'Atleta Profissional',
            image: '/perfil-1.jpg'
        }
    ];

    return (
        <section className='bgDepo py-20'>
            <div className='maxW flex justify-end w-full'>
                <article className='w-full lg:w-1/2'>
                    <p className='uppercase tracking-widest font-Rubik text-OrangeP text-center lg:text-left'>Depoimentos</p>
                    <h1 className='text-4xl font-Mont text-center text-black uppercase mt-4 lg:text-left'>Depoimentos de atletas</h1>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        className='mt-10'
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='bg-GrayP py-10 px-10 border-l-4 border-OrangeP flex flex-col justify-between min-h-[350px]'>
                                    <div>
                                        <FaStar className='text-white' />
                                        <p className='text-white mt-10'>{item.text}</p>
                                    </div>
                                    <div className='mt-8 flex items-center gap-4'>
                                        <img className='w-[77px] h-[77px] object-cover rounded-full' src={item.image} alt={item.name} />
                                        <div>
                                            <h1 className='text-white'>{item.name}</h1>
                                            <p className='uppercase text-sm text-OrangeP'>{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Setas */}
                    <div className='flex justify-center gap-6 mt-2 select-none lg:justify-start'>
                        <FaAnglesRight 
                            className='rotate-180 text-3xl cursor-pointer text-OrangeP/60 hover:text-OrangeP' 
                            onClick={() => swiperRef.current?.slidePrev()}
                            onMouseDown={(e) => e.preventDefault()}
                            style={{ userSelect: 'none' }}
                        />
                        <FaAnglesRight 
                            className='text-3xl cursor-pointer text-OrangeP/60 hover:text-OrangeP' 
                            onClick={() => swiperRef.current?.slideNext()}
                            onMouseDown={(e) => e.preventDefault()}
                            style={{ userSelect: 'none' }}
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}