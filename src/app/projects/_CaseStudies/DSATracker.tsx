import Image from 'next/image'
import React from 'react'

const DSATracker = () => {
    return (
        <section className='flex flex-col gap-2 md:flex-row'>
            <article className='basis-2/3 h-68 my-2'>
                <Image src="/dsa-tracker.png" alt="dsa tracker" width={1000} height={500} className='object-fit rounded-lg border-2' />
            </article>
            <article className='basis-1/3 border-2 border-dashed rounded-lg my-2'></article>
        </section>
    )
}

export default DSATracker
