import React from 'react';

export default function Form() {
    return (
        <>
            <form action="" className='bg-GrayP px-10 py-20 border-l-3 border-OrangeP flex flex-col gap-4'>
                <div className='flex gap-4 w-full'>
                    <input className='bg-[#181817] text-white outline-0 py-4 px-4 w-full' placeholder='Primeiro Nome' type="text" />
                    <input className='bg-[#181817] text-white outline-0 py-4 px-4 w-full' placeholder='Sobrenome' type="text" />
                </div>
                <input className='bg-[#181817] text-white outline-0 py-4 px-4 w-full' placeholder='Seu E-mail' type="text" />
                <textarea className='bg-[#181817] text-white outline-0 py-4 px-4 w-full resize-none' placeholder='Sua mensagem' rows={4} name="" id=""></textarea>
                <div>
                    <button className='bg-OrangeP text-white px-8 py-3 uppercase cursor-pointer'>Enviar</button>
                </div>
            </form>
        </>
    );
}