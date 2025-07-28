import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('../Map/MyMap'), { ssr: false });

const projects = [
    { title: 'DSA tracker', description: 'A platform to practice and track progress in Data Structures and Algorithms.', href: '/projects/dsa-tracker', img: '/dsatracker_blob.png' },
    { title: 'Scriptoria', description: 'A digital platform for reading, writing, and managing educational e-books.', href: '/projects/scriptoria', img: '/scriptoria_blob.png' },
    { title: 'Portfolio', description: 'A sleek personal portfolio designed to showcase expertise in an interactive format.', href: '/projects/portfolio', img: '/portfolio_blob.png' },

]

const Projects = () => {
    return (
        <section id="works" className='grid grid-cols-1 sm1:grid-cols-2 gap-4'>
            {projects.map((project) => (
                <article key={project.title} className='flex flex-col flex-1 gap-4 p-10'>
                    <Image src={project.img} width={450} height={450} alt={project.title} />
                    <GetProject key={project.title} title={project.title} description={project.description} href={project.href} />
                </article>
            ))}

            <article className='w-full flex flex-col justify-center items-center'>
                <GetAboutMe />
            </article>
        </section>
    )
}

export default Projects

const GetProject = ({ title, description, href }: { title: string, description: string, href: string }) => {
    return (
        <section className="group flex flex-grow">
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

const GetAboutMe = () => {
    return (
        <section id="about" className="group flex rounded-lg">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front face with text */}
                <Image
                    src="/HireMe.png"
                    alt="Staml image"
                    width={400}
                    height={800}
                    className="h-auto max-w-full"
                    priority={true}
                />
                {/* Back face with image */}
                <div
                    className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center border-2 border-black"
                >
                    <MyMap />

                </div>
            </div>
        </section>

    )
}