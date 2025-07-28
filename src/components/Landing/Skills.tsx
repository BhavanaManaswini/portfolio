import React from 'react'
import { Icons } from '../icons'
import Glow from '../HOC/Glow'

const skills = [
    { skill: 'React JS', icon: <Icons.react className='size-14' /> },
    { skill: 'Next JS', icon: <Icons.next className='size-14' /> },
    { skill: 'JavaScript', icon: <Icons.js className='size-14' /> },
    { skill: 'TypeScript', icon: <Icons.ts className='size-14' /> },
    { skill: 'Tailwind CSS', icon: <Icons.tailwind className='size-14' /> },
    { skill: 'Redux', icon: <Icons.redux className='size-14' /> },
    { skill: 'Bootstrap', icon: <Icons.bootstrap className='size-14' /> },
    { skill: 'Material UI', icon: <Icons.material className='size-14' /> },
    { skill: 'ShadCN', icon: <Icons.shadcn className='size-14' /> },
    { skill: 'HTML', icon: <Icons.html className='size-14' /> },
    { skill: 'CSS', icon: <Icons.css className='size-14' /> },
    { skill: 'MongoDB', icon: <Icons.mongo className='size-14' /> },
    { skill: 'Next-Auth', icon: <Icons.nextauth className='size-14' /> },
    { skill: 'Langchain.js', icon: <Icons.langchain className='size-14' /> },
    { skill: 'Git', icon: <Icons.git className='size-14' /> },
    { skill: 'GitHub', icon: <Icons.github className='size-14' /> },
    { skill: 'VS Code', icon: <Icons.vscode className='size-14' /> },
    { skill: 'Postman', icon: <Icons.postman className='size-14' /> },
]

const Skills = () => {
    return (
        <main className="relative min-h-12 flex flex-col justify-center bg-rose-900 overflow-hidden text-center my-6">
            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                className="w-full inline-flex py-4 flex-nowrap overflow-hidden bg-rose-900 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">

                    {skills.map((skill) => (
                        <li key={skill.skill}>{skill.icon}</li>
                    ))}
                </ul>
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">

                    {skills.map((skill) => (
                        <li key={skill.skill}>{skill.icon}</li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Skills
