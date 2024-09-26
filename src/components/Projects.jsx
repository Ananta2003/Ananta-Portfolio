import React from 'react'
import { PROJECTS } from '../constants'
import Reveal from './Reveal'

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='mb-10 text-center text-[#01ff96] text-5xl title font-bold'>Projects</h1>
            <div>
                {PROJECTS.map((project, index) => {
                    return <div key={index} className='mb-8 flex flex-wrap items-center justify-center lg:justify-between lg:gap-20 p-4 tracking-tighter'>
                        <div className='w-full lg:w-1/4 '>
                            <a target='blank' href={project.anchor}>
                                <img src={project.image}
                                    width={250}
                                    height={350}
                                    className='rounded-md'
                                    alt="" />
                            </a>
                        </div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                            <Reveal><h3 className='my-2 font-semibold text-[#01ff96] text-2xl'>{project.title}</h3></Reveal>

                            <Reveal><p className='mb-4 text-stone-100'>{project.description}</p></Reveal>
                            <a className='block mb-4 text-center hover:bg-[#01ff96] hover:text-black p-2 border border-[#01ff96]' target='blank' href={project.anchor}>Link</a>

                            {project.technologies.map((tech, index) => {
                                return <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-200' key={index}>
                                    {tech}
                                </span>
                            })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects
