import React from 'react'
import ExperienceCards from './ExperienceCards'
// import Chat from '../Chat/Chat'

const EducationExperience = () => {
    return (
        <section id="experience" className="p-2 my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="w-full col-span-1 flex flex-col justify-end">
                <h1 className='text-4xl text-start overflow-hidden text-ellipsis'>WORK <br /> EXPERIENCE</h1>
                <p className='italic text-base flex justify-between w-full gap-2'><span>@Capgemini</span><span>Oct 22 - Present</span></p>

            </article>
            <article className="w-full col-span-2">
                <ExperienceCards />
            </article>
        </section>

    )
}

export default EducationExperience