import React from 'react'
import ExperienceCards from './ExperienceCards'
// import Chat from '../Chat/Chat'

const EducationExperience = () => {
    return (
        <section id="experience" className="p-2 my-6 flex flex-col sm1:flex-row">
            <article className="w-full basis-1/2 sm1:mr-2 flex flex-col justify-end">
                <h1 className='text-6xl text-start overflow-hidden text-ellipsis'>WORK <br /> EXPERIENCE</h1>
                <p className='italic text-base flex justify-between w-full gap-2'><span>@Capgemini</span><span>Oct 22 - Present</span></p>

            </article>
            <article className="w-full basis-1/2 sm1:ml-2">
                <ExperienceCards />
            </article>
        </section>

    )
}

export default EducationExperience