import React from 'react';

const services = [
    { title: "REGULAR BOXING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "WOMEN'S BOXING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "AMATEUR TRAINING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "KID'S BOXING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "KICK BOXING", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

export default function Services() {
    return (
        <section id='services' className='pb-20'>
            <div className='maxW'>
                <p className='uppercase tracking-widest font-Rubik text-OrangeP text-center'>Nossos serviços</p>
                <h1 className='text-4xl font-Mont text-GrayP uppercase mt-4 text-center'>Disciplina forja <span className='text-OrangeP'>campeões.</span></h1>

                <div className="flex flex-col flex-wrap justify-center gap-4 mt-14 lg:flex-row">
                    {services.slice(0, 3).map((item, index) => (
                        <div key={index} className="relative h-[400px] overflow-hidden lg:w-[32.3%]">
                            <img src="/treino-amador.jpg" alt={item.title} className="w-full h-full object-cover z-10" />
                            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 border-l-3 border-OrangeP">
                                <h2 className="text-white font-bold text-lg">{item.title}</h2>
                                <p className="text-sm text-white mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 flex-wrap justify-center mt-4">
                    {services.slice(3, 5).map((item, index) => (
                        <div key={index} className="relative h-[400px] overflow-hidden lg:w-[49%]">
                            <img
                                src="/treino-amador.jpg"
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 border-l-3 border-OrangeP">
                                <h2 className="text-white font-bold text-lg">{item.title}</h2>
                                <p className="text-sm text-white mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
