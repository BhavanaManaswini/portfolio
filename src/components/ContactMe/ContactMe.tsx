import React from 'react'

const ContactMe = () => {
    return (
        <div className='w-full bg-[#F8AFA6] min-h-42 py-10 px-[10%] my-4'>
            <h1 className='uppercase text-2xl font-mono'>Let&apos;s Connect!</h1>
            <p>I&apos;m always excited to discuss new opportunities. Feel free to reach out on my email.</p>
            <p className='text-sm'>Email: <a href="mailto:bhavanamanaswi@gmail.com" className='underline'>bhavanamanaswi@gmail.com</a></p>

            <p className='text-sm mt-2'>
                <a
                    href="/Bhavana_Frontend_Developer.pdf"
                    download
                    className='underline text-rose-800 hover:text-rose-950'
                >
                    Download Resume
                </a>
            </p>

        </div>
    )
}

export default ContactMe
