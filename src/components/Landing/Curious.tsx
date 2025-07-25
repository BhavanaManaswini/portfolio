import React from 'react'
import Chat from '../Chat/Chat'

const Curious = () => {
    return (
        <section id="chat-me" className="p-2 pb-8 overflow-hidden">
            <h1 className='w-full text-center border-t-2 border-b-2 text-xl mb-2 bg-backgroundReverse text-foregroundReverse'>Ask away</h1>
            <article className='p-2 border-2 border-dashed rounded-lg'>
                <Chat />
            </article>
        </section>
    )
}

export default Curious
