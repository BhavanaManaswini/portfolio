import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'

const projects = [
    { title: 'DSA tracker', description: 'A platform to practice and track progress in Data Structures and Algorithms. Built using Next.js, MongoDB, and Next-Auth, this responsive web app allows users to log in securely, explore various DSA topics, and monitor their completion status. Users can also upload and manage their own custom DSA sheets, making it a personalized tool for coding preparation and interview readiness.', href: '/projects/dsa-tracker' },
    { title: 'Scriptoria', description: 'A digital platform for reading, writing, and managing educational e-books. Developed with React.js, Node.js, Express.js, and MongoDB, Scriptoria enables users to search for books via open APIs, read them online, and even create their own content. Users can save their written books and download them as PDFs, making it a versatile tool for both learners and aspiring authors.', href: '/projects/scriptoria' },
    { title: 'Portfolio', description: 'A sleek and responsive personal portfolio built using Next.js, designed to showcase projects, skills, and experience in a modern and interactive format. The site features smooth navigation, clean UI, and dynamic content rendering, making it easy for visitors to explore work and connect professionally. It serves as a central hub for all professional highlights and project demos.', href: '/projects/portfolio' }
]

const Projects = () => {
    return (
        <section className='grid grid-cols-1 sm1:grid-cols-3 gap-2'>
            <h1 className='w-full col-span-1 sm1:col-span-3 text-center bg-backgroundReverse text-foregroundReverse text-xl'>Projects</h1>
            {projects.map((project) => (
                <GetProject key={project.title} title={project.title} description={project.description} href={project.href} />
            ))}
        </section>
    )
}

export default Projects

const GetProject = ({ title, description, href }: { title: string, description: string, href: string }) => {
    return (
        <article id="projects" className="col-span-1 w-full border-2 p-2 m-2 rounded-lg">
            <section className="border-2 border-dashed h-full p-2 rounded-lg flex flex-col justify-between">
                <div>
                    <h2 className="w-full italic font-bold">{title}</h2>
                    <p className="font-mono text-sm">{description}</p>
                </div>
                <Link href={href} className="self-end mt-1 flex items-center gap-1">
                    Know More <Icons.forward />
                </Link>
            </section>
        </article>

    )
}