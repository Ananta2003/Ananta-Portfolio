import React from 'react'
import { BIO } from '../constants'

const About = () => {
    return (
        <section className='flex max-w-4xl flex-col gap-12 pt-20' id="bio">
            <h2 className='text-center text-[#01ff96] text-5xl title font-bold'>About</h2>
            <div>
                {BIO.map((bio,index)=>(
                    <p key={index} className='mb-4 text-white text-center text-lg lg:text-xl'>{bio}</p>
                ))}
            </div>
        </section>
    )
}

export default About
