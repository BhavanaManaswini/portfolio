import React from 'react'
import { Icons } from '../icons'

const skills = [
    { skill: 'React JS', icon: <Icons.react className='size-16' /> },
    { skill: 'Next JS', icon: <Icons.next className='size-16' /> },
    { skill: 'JavaScript', icon: <Icons.js className='size-16' /> },
    { skill: 'TypeScript', icon: <Icons.ts className='size-16' /> },
    { skill: 'Tailwind CSS', icon: <Icons.tailwind className='size-16' /> },
    { skill: 'Redux', icon: <Icons.redux className='size-16' /> },
    { skill: 'Bootstrap', icon: <Icons.bootstrap className='size-16' /> },
    { skill: 'Material UI', icon: <Icons.material className='size-16' /> },
    { skill: 'ShadCN', icon: <Icons.shadcn className='size-16' /> },
    { skill: 'HTML', icon: <Icons.html className='size-16' /> },
    { skill: 'CSS', icon: <Icons.css className='size-16' /> },
    { skill: 'MongoDB', icon: <Icons.mongo className='size-16' /> },
    { skill: 'Next-Auth', icon: <Icons.nextauth className='size-16' /> },
    { skill: 'Langchain.js', icon: <Icons.langchain className='size-16' /> },
    { skill: 'Git', icon: <Icons.git className='size-16' /> },
    { skill: 'GitHub', icon: <Icons.github className='size-16' /> },
    { skill: 'VS Code', icon: <Icons.vscode className='size-16' /> },
    { skill: 'Postman', icon: <Icons.postman className='size-16' /> },
]

const Skills = () => {
    return (
        <section id="skills" className="p-2 pb-8 overflow-hidden">
            <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2'>Tech stack <Icons.and className='inline size-4' /> Tools</h1>
            <section className="flex flex-wrap gap-8 justify-center items-center">
                {skills.map((skill) => (
                    <article key={skill.skill} className="relative group flex justify-center items-center">
                        <button
                            className="select-none rounded-lg py-1 px-2 transition-transform duration-300 ease-in-out focus:opacity-[0.95] active:opacity-[0.95] disabled:pointer-events-none disabled:opacity-50 animate-wiggle group"
                        >
                            <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
                                {skill.icon}
                            </div>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[10rem] flex justify-center items-center font-sans text-sm font-normal">
                            <div
                                className="w-fit py-1 px-2 rounded-lg bg-backgroundReverse text-foregroundReverse opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                {skill.skill}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Skills
