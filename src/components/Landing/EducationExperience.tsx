import React from 'react'
// import Chat from '../Chat/Chat'

const EducationExperience = () => {
    return (
        <section id="education" className="p-2 view flex flex-col sm1:flex-row">
            <article className="appear-view w-full basis-1/2 sm1:mr-2">
                <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2'>Education</h1>
                <section className='p-2'>
                    <h3 className='font-bold underline'>B.Tech</h3>
                    <ul>
                        <li className='border-b flex justify-between'><i>Institution:</i> VNRVJIET</li>
                        <li className='border-b flex justify-between'><i>Years:</i> 2018–2022</li>
                        <li className='border-b flex justify-between'><i>Specialization:</i> ECE</li>
                        <li className='border-b flex justify-between'><i>CGPA:</i> 9.24</li>
                    </ul>
                    <h3 className='font-bold underline'>Intermediate</h3>
                    <ul>
                        <li className='border-b flex justify-between'><i>Institution:</i> Narayana</li>
                        <li className='border-b flex justify-between'><i>Years:</i> 2016–2018</li>
                        <li className='border-b flex justify-between'><i>Specialization:</i> MPC</li>
                        <li className='border-b flex justify-between'><i>CGPA:</i> 9.73</li>
                    </ul>
                </section>

            </article>
            <article className="appear-view w-full basis-1/2 sm1:ml-2">
                <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2'>Experience</h1>
                <section className='p-2'>
                    <h3 className='font-bold underline'>Senior Software Engineer</h3>
                    <ul>
                        <li className='border-b flex justify-between'><i>Organisation:</i> Capgemini</li>
                        <li className='border-b flex justify-between'><i>Role:</i> Frontend Developer</li>
                        <li className='border-b flex justify-between'><i>Location:</i> Hyderabad</li>
                        <li className='border-b flex justify-between'><i>Duration:</i> Oct 2022-Present</li>
                    </ul>
                    <h3 className='font-bold underline'>Software Engineer Intern</h3>
                    <ul>
                        <li className='border-b flex justify-between'><i>Organisation:</i> Capgemini</li>
                        <li className='border-b flex justify-between'><i>Role:</i> Fullstack Developer</li>
                        <li className='border-b flex justify-between'><i>Location:</i> Hyderabad</li>
                        <li className='border-b flex justify-between'><i>Duration:</i> Mar-May 2022</li>
                    </ul>
                </section>
            </article>
        </section>

    )
}

export default EducationExperience