import React from 'react'

const Summary = () => {
    return (
        <article className="w-full flex flex-col sm1:flex-row">
            <section className="basis-3/5 p-2 flex flex-col border-b  sm1:border-none">
                <h1 className='w-full text-2xl font-bold flex flex-col tracking-2'>
                    <span className='w-full text-center'>Scalable UIs with Custom</span>
                    <span className='w-full text-center text-[10vw] sm1:text-6xl flex justify-center items-center bg-backgroundReverse text-foregroundReverse text-6xl uppercase tracking-[0.5vw]'>
                        Web Solutions
                    </span>
                    <span className='w-full text-center'>using React.js & Next.js</span>
                </h1>
                <article className='italic text-base'>
                    Crafting innovative digital experiences that exceed expectations — delivering sleek, scalable, and user-focused pixel-perfect frontend solutions.
                </article>

                <article className="flex-1 bg-[url('/skills-bg.png')] bg-contain bg-[length:100px_100px] bg-center font-thin text-center flex items-center justify-center grayscale-[200]">
                </article>
            </section>

            <section className="basis-2/5 p-2 sm1:border-l  flex flex-col">
                <article className="text-base font-thin">
                    <span className='float-left text-3xl'>R</span>esults driven Frontend Developer with 3 years of experience building high-performance, scalable web applications using React.js, Next.js, JavaScript, and TypeScript. Adept in optimizing UI performance, state management, cross-browser responsive designs. Passionate about clean code, and UI/UX best practices.
                </article>
                <article className="flex-1 bg-[url('/skills-bg.png')] bg-contain bg-[length:50px_50px] bg-center font-thin text-center flex items-center justify-center grayscale-[200]">
                </article>
            </section>
        </article>
    )
}

export default Summary
