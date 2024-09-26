import React from 'react'
import { HERO } from '../constants'
import Dots from './Dots'
import Reveal from './Reveal'

const Hero = () => {
    return (
        // <section className='flex min-h-screen flex-wrap items-center  tracking-tighter sm:m-10 '>
        //     <div content='device-width' className='w-full md:w-1/2 name sm:px-4 '>
        //         <Reveal>
        //             <p className='my-6 p-2 text-4xl font-bold md:text-5xl lg:text-[5.5rem] title '><span className='text-[#01ff96]'>Hey,</span>{HERO.name}</p>
        //         </Reveal>
        //         <Reveal>
        //             <div className='flex items-baseline'>
        //                 <p className='text-3xl p-2 font-light tracking-tighter lg:text-4xl'>{HERO.text}</p>
        //                 <p className='p-2 text-3xl text-[#01ff96] font-extrabold tracking-tighter lg:text-4xl'>
        //                     {HERO.greet}
        //                 </p>
        //             </div>

        //         </Reveal>
        //         <Reveal>
        //             <p className='p-2 text-xl mb-8'>
        //                 {HERO.description}
        //             </p>
        //         </Reveal>
        //         <a href="#contact"><button className='bg-[#01ff96] m-2 font-bold text-xl px-8 py-4 tracking-tighter  rounded-md text-black ' >Contact Me</button></a>

        //     </div>
        //     <div className=' w-full md:w-1/2  '>
        //         <div className='flex justify-center cursor-pointer '><Dots /> </div></div>
        // </section>

        <div className='mb-8 flex flex-wrap items-center justify-center lg:justify-between lg:gap-20 p-4 tracking-tighter'>
            <section className='flex min-h-screen flex-wrap items-center  tracking-tighter sm:m-10 '>
                <div content='device-width' className='w-full md:w-1/2 name sm:px-4 '>
                    <Reveal>
                        <p className='my-6 p-2 sm:ml-[4rem] md:ml-[1rem] text-2xl font-bold md:text-5xl lg:text-[5.5rem] title '><span className='text-[#01ff96]'>Hey,</span>{HERO.name}</p>
                    </Reveal>
                    <Reveal>
                        <div className='flex items-baseline sm:ml-[4rem] md:ml-[1rem]'>
                            <p className='md:text-2xl sm:text-xl p-2 font-light tracking-tighter lg:text-4xl'>{HERO.text}</p>
                            <p className='p-2 ml-2 sm:text-xl text-3xl text-[#01ff96] font-extrabold tracking-tighter lg:text-4xl'>
                                {HERO.greet}
                            </p>
                        </div>

                    </Reveal>
                    <Reveal>
                        <div className='tracking-tighter h-auto md:ml-[1rem] sm:mx-[4rem]'>
                            <p className='p-2 text-xl md:text-xl mb-8 sm:text-sm  tracking-tighter'>
                                {HERO.description}
                            </p>
                        </div>
                    </Reveal>
                    <a className='sm:mx-[4rem]' href="#contact"><button className='bg-[#01ff96]  m-2 font-bold text-xl px-8 py-4 tracking-tighter  rounded-md text-black sm:ml-[4rem] md:m-0' >Contact Me</button></a>

                </div>
                <div className=' w-full md:w-1/2  '>
                    <div className='flex justify-center cursor-pointer overflow-hidden'><Dots /> </div></div>
            </section>

        </div>
    )
}

export default Hero
