import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
    { title: 'DSA tracker', description: 'A platform to practice and track progress in Data Structures and Algorithms.', href: '/projects/dsa-tracker' },
    { title: 'Portfolio', description: 'A sleek and responsive personal portfolio designed to showcase projects, skills, and experience in a modern and interactive format.', href: '/projects/portfolio' },
    { title: 'Scriptoria', description: 'A digital platform for reading, writing, and managing educational e-books.', href: '/projects/scriptoria' },
]

const Projects = () => {
    return (
        <section id="projects" className='grid grid-cols-1 sm1:grid-cols-3 gap-2'>
            <h1 className='w-full col-span-1 sm1:col-span-3 text-center bg-backgroundReverse text-foregroundReverse text-xl'>Projects</h1>
            {projects.map((project) => (
                <GetProject key={project.title} title={project.title} description={project.description} href={project.href} />
            ))}

            <article className='col-span-1 sm1:col-span-3 w-full add-bg flex flex-col justify-center items-center'>
                <Image
                    src="/HireMe.png"
                    alt="Staml image"
                    width={300}
                    height={600}
                    className="h-auto max-w-full"
                    priority={true}
                />
            </article>
        </section>
    )
}

export default Projects

const GetProject = ({ title, description, href }: { title: string, description: string, href: string }) => {
    return (
        <section className="group">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front face with text */}
                <article className="col-span-1 w-full h-full border-2 p-2 rounded-lg">
                    <section className="border-2 border-dashed h-full p-2 rounded-lg flex flex-col justify-between">
                        <div>
                            <h2 className="w-full italic font-bold">{title}<Icons.cursor className='size-6 inline mx-2' /></h2>
                            <p className="font-mono text-sm">{description}</p>
                        </div>
                    </section>
                </article>
                {/* Back face with image */}
                <div
                    className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center border-2 border-black"
                    style={{ backgroundImage: `url(/${title.replace(/ /g, "-").toLowerCase()}.png)` }}
                >
                    <Link
                        href={href}
                        className={`bg-black/80 backdrop-blur-xs h-full flex w-full justify-center items-center rounded-md`}
                    >
                        <p className='w-full bg-black text-[antiquewhite] p-2 text-center transition-transform duration-300 ease-in-out hover:scale-105'>Know More <Icons.forward className="size-6 inline" /></p>
                    </Link>

                </div>
            </div>
        </section>

    )
}