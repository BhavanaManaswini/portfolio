import React from 'react'

const ContactMe = () => {
    return (
        <div className='w-full bg-stone-300 min-h-42 py-10 px-[10%] my-4'>
            <h1 className='uppercase text-2xl font-mono'>Let&apos;s Connect!</h1>
            <p>I&apos;m always excited to discuss new opportunities. Feel free to reach out on my email.</p>
            <p className='text-sm'>Email: <a href="mailto:bhavanamanaswi@gmail.com" className='underline'>bhavanamanaswi@gmail.com</a></p>

            <p className='text-sm mt-2'>
                <a
                    href="/Bhavana_Frontend_Developer.pdf"
                    download
                    className='underline text-stone-800 hover:text-stone-950'
                >
                    Download Resume
                </a>
            </p>

        </div>
    )
}

export default ContactMe
