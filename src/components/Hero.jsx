import React from 'react'
import { HERO } from '../constants'
import Dots from './Dots'
import Reveal from './Reveal'

const Hero = () => {
    return (
        <section className='flex min-h-screen flex-wrap items-center  tracking-tighter '>
            <div className='w-full md:w-1/2 name '>
                <Reveal>
                    <p className='my-6 p-2 text-4xl font-bold md:text-5xl lg:text-[5.5rem] title '><span className='text-[#01ff96]'>Hey,</span>{HERO.name}</p>
                </Reveal>
                <Reveal>
                    <div className='flex items-baseline'>
                        <p className='text-3xl p-2 font-light tracking-tighter lg:text-4xl'>{HERO.text}</p>
                        <p className='p-2 text-3xl text-[#01ff96] font-extrabold tracking-tighter lg:text-4xl'>
                            {HERO.greet}
                        </p>
                    </div>

                </Reveal>
                <Reveal>
                    <p className='p-2 text-xl mb-8'>
                        {HERO.description}
                    </p>
                </Reveal>
                <a href="#contact"><button className='bg-[#01ff96] m-2 font-bold text-xl px-8 py-4 tracking-tighter  rounded-md text-black ' >Contact Me</button></a>

            </div>
            <div className=' w-full md:w-1/2  '>
                <div className='flex justify-center cursor-pointer '><Dots /> </div></div>
        </section>
    )
}

export default Hero
