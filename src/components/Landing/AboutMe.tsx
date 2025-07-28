import React from 'react'
import Chat from '../Chat/Chat';
import { Icons } from '../icons';

const AboutMe = () => {
    return (
        <section id="chat">
            <h1 className='w-full text-start text-2xl font-bold mb-2'><Icons.wannaChat className='size-16 mx-2 inline' /> Wanna Chat ??</h1>
            <article className='p-2 border-2 border-dashed rounded-lg '>
                <Chat />
            </article>
        </section>
    )
}

export default AboutMe