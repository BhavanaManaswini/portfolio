'use client'

import React, { useState } from 'react'
import { Icons } from '../icons'
import Image from 'next/image'

const Intro = () => {
    const [animate, setAnimate] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(prev => {
            if (!prev) setAnimate(false);
            return !prev
        });
        requestAnimationFrame(() => {
            setAnimate(true);
        });
    };

    return (
        <section id="intro" className={`w-full min-h-80 py-10 px-4 relative overflow-hidden ${isChecked ? '' : 'bg-[#F8AFA6]'} border-2 border-dashed rounded-lg`}>
            <article className="w-full grid grid-cols-1 sm1:grid-cols-2 relative overflow-x-hidden z-10">
                <label className="absolute top-0 right-0 m-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleToggle}
                        className="sr-only peer"
                    />
                    <div className="relative w-9 h-5 bg-rose-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 dark:peer-focus:ring-rose-500 rounded-full peer dark:bg-rose-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-rose-500 peer-checked:bg-rose-500 dark:peer-checked:bg-rose-500 flex justify-end items-center">
                        <Icons.arrow className={`size-4 animate-ping mx-1 ${isChecked ? 'hidden' : ''}`} />
                    </div>
                </label>
                <article className="w-fit h-fit relative">
                    <Image priority src="/gun.png" alt="gun" width={200} height={1000} className="w-auto h-auto m-2" />
                    <div id="bullet" className="w-[100vw] absolute top-[15%] left-[85%] z-20 bg-rose-500">
                        <Icons.bullet
                            className={`size-8 text-black transform rotate-90 absolute z-20 ${animate ? 'animate-shoot' : ''
                                }`}
                        />
                    </div>
                </article>
                <section className='text-4xl w-full h-full flex flex-col justify-end text-center'>
                    Hello, I&apos;m
                    <p className='font-mono text-5xl bold'>Bhavana Manaswini</p>
                    <div className='overflow-hidden'>
                        <p className={`text-base opacity-0 ${isChecked ? 'animate-text-reveal' : ''}`}>
                            Seeking my next challenge where innovation meets impact.
                        </p>
                    </div>
                </section>
            </article>
            <svg className={`absolute bottom-0 left-0 w-full z-0 h-0 opacity-0 ${isChecked ? 'animate-expand' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="100%" preserveAspectRatio="none"><path fill="#F8AFA6" fillOpacity="1" d="M0,256L18.5,229.3C36.9,203,74,149,111,117.3C147.7,85,185,75,222,96C258.5,117,295,171,332,192C369.2,213,406,203,443,181.3C480,160,517,128,554,101.3C590.8,75,628,53,665,74.7C701.5,96,738,160,775,181.3C812.3,203,849,181,886,170.7C923.1,160,960,160,997,181.3C1033.8,203,1071,245,1108,234.7C1144.6,224,1182,160,1218,133.3C1255.4,107,1292,117,1329,144C1366.2,171,1403,213,1422,234.7L1440,256L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
        </section>


    )
}

export default Intro