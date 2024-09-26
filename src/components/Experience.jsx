import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
        <section className='pt-20 ' id='work'>
            <h2 className='text-center text-[#01ff96] text-5xl title font-bold tracking-tighter '>Work Experience</h2>
            <div className='space-y-8 p-10 '>
                {EXPERIENCES.map((exp,index)=>{
                    return <div key={index} className='rounded-xl border border-stone-50/30 bg-white/10 p-4'>
                        <h3 className='text-2xl text-[#01ff96] font-semibold'>{exp.title}</h3>
                        <p className='text-xl'>{exp.company}</p>
                        <p className='text-sm text-stone-300'>{exp.duration}</p>
                        <p className='mt-2 text-base'>{exp.description}</p>
                    </div>
                })}
            </div>

        </section>
    )
}

export default Experience
