import React from 'react'
import Chat from '../Chat/Chat'

const AboutMe = () => {
    return (
        <section id="about-me" className="p-2">
            <h1 className="w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2">
                About Me
            </h1>
            <div className='view'>
                <div className='appear-view w-full'>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md2:grid-cols-3 justify-center gap-2">
                        <article className="col-span-1">
                            <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse mb-2'>Education</h1>
                            <h3 className='font-bold'>B.Tech</h3>
                            <section className='p-2'>
                                <ul>
                                    <li className='border-b flex justify-between'><i>Institution:</i> VNRVJIET</li>
                                    <li className='border-b flex justify-between'><i>Years:</i> 2018–2022</li>
                                    <li className='border-b flex justify-between'><i>Specialization:</i> ECE</li>
                                    <li className='border-b flex justify-between'><i>CGPA:</i> 9.24</li>
                                </ul>
                                <h3 className='font-bold'>HSC</h3>
                                <ul>
                                    <li className='border-b flex justify-between'><i>Institution:</i> Narayana</li>
                                    <li className='border-b flex justify-between'><i>Years:</i> 2016–2018</li>
                                    <li className='border-b flex justify-between'><i>Specialization:</i> MPC</li>
                                    <li className='border-b flex justify-between'><i>CGPA:</i> 9.73</li>
                                </ul>
                            </section>

                        </article>
                        <article className="col-span-1">
                            <h1 className='w-full text-center mb-2 bg-backgroundReverse text-foregroundReverse'>Experience</h1>
                            <section className='p-2'>
                                <h3 className='font-bold underline'>Senior Software Engineer</h3>
                                <ul>
                                    <li className='border-b flex justify-between'><i>Organisation:</i> Capgemini</li>
                                    <li className='border-b flex justify-between'><i>Role:</i> Frontend Developer</li>
                                    <li className='border-b flex justify-between'><i>Location:</i> Hyderabad</li>
                                    <li className='border-b flex justify-between'><i>Duration:</i> 2022 Oct - Present</li>
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
                        <article className="flex flex-col col-span-1 sm:col-span-2 md2:col-span-1">
                            <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse mb-2'>Ask away</h1>
                            <article className='flex-1 min-h-64 max-h-64 overflow-hidden bg-backgroundReverse'>
                                <Chat />
                            </article>
                        </article>
                    </section>
                </div>
            </div>
        </section>

    )
}

export default AboutMe