import React from 'react'
import { Icons } from '../icons'

const Summary = () => {
    return (
        <article id="summary" className="w-full flex flex-col md:flex-row">
            <section className="basis-3/5 p-2 flex flex-col border-b md:border-none">
                <h1 className='w-full text-2xl font-bold flex flex-col tracking-2'>
                    <span className='w-full text-center'>
                        <span className="max-h-[2.3rem] mx-2 inline-flex flex-col overflow-hidden">
                            <ul className="block animate-text-slide">
                                <li className='text-end'>Scalable</li>
                                <li className='text-end'>Interactive</li>
                                <li className='text-end'>Responsive</li>
                                <li className='text-end'>Dynamic</li>
                                <li className='text-end'>Elegant</li>
                                <li className='text-end'>Scalable</li>
                            </ul>
                        </span>
                        UIs with Custom</span>
                    <span className='w-full text-center text-[10vw] md:text-6xl flex justify-center items-center bg-backgroundReverse text-foregroundReverse text-6xl uppercase tracking-[0.5vw]'>
                        Web Solutions
                    </span>
                    <span className='w-full text-center'>using React.js & Next.js</span>
                </h1>
                <article className='italic text-base'>
                    Crafting innovative digital experiences that exceed expectations — delivering sleek, scalable, and user-focused pixel-perfect frontend solutions.
                </article>
            </section>

            <section className="basis-2/5 p-2 md:border-l flex flex-col">
                <article className="text-base font-thin text-center">
                    <span className='float-left text-5xl font-thin'>I&apos;</span>m a results driven Frontend Developer with 3 years of experience building high-performance, scalable web applications. Adept in optimizing UI performance & cross-browser responsive designs. Passionate about clean code, and UI/UX best practices.
                </article>
                <article className='w-full mt-auto text-base font-bold text-right flex flex-wrap justify-end items-center'><Icons.location className='size-6 inline' />Hyderabad, India<Icons.india className='size-6 inline mx-2' /></article>
            </section>
        </article>
    )
}

export default Summary

{/* <article className="flex-1 bg-[url('/skills-bg.png')] bg-contain bg-[length:100px_100px] bg-center font-thin text-center flex items-center justify-center grayscale-[200]">
                </article> */}