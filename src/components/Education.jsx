import React from 'react'
import { EDUCATION } from '../constants'

const Education = () => {
    return (
        <section className='py-8' id='education'>
            <h2 className='mb-4 text-center text-[#01ff96] text-5xl title font-bold'> Education</h2>
            {EDUCATION.map((edu,index)=>{
                return <div key={index} className='mb-6 p-10'>
                    <h3 className='text-xl text-[#01ff96] font-semibold'>{edu.degree}</h3>
                    <p className='text-lg '>{edu.institution}</p>
                    <p className='text-medium font-semibold text-stone-300'>{edu.duration}</p>
                    <p className='mt-2 '>{edu.description}</p>
                </div>
            })}
        </section>
    )
}

export default Education
