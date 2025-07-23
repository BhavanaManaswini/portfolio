import dynamic from 'next/dynamic';
import React from 'react'
const MyMap = dynamic(() => import('../Map/MyMap'), { ssr: false });

const AboutMe = () => {
    return (
        <section id="about-me" className="p-2">
            <h1 className="w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2">
                About Me
            </h1>
            <MyMap />
        </section>

    )
}

export default AboutMe