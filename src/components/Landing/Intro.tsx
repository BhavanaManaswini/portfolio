import Image from 'next/image';
import React from 'react';

const Intro = () => {
    return (
        <section className="flex flex-col md1:flex-row p-2 m-2 border-t ">
            <article className="basis-1/2 pr-6 space-y-4 border-b  md1:border-none pb-2">
                <h2 className="text-3xl font-bold uppercase tracking-wide flex items-center">Technical<br /> Edge
                    <Image
                        src="/Frontend.png"
                        alt="Staml image"
                        width={100}
                        height={100}
                        className="rounded-full"
                        priority={true}
                    />
                </h2>
                <p className="text-lg leading-relaxed">
                    Specialized in building intuitive, interactive, and responsive interfaces that elevate user experience with a keen eye for detail.
                </p>
                <p className="italic text-stone-900">
                    Discover the tools & frameworks that shape my development approach.
                </p>
                <button className="mt-4 px-4 py-2 border border-dashed border-stone-800 text-stone-800 hover:bg-backgroundReverse hover:text-foregroundReverse transition">
                    Read Full Article
                </button>
            </article>

            <article className="basis-1/2 pl-6 space-y-4 md1:border-l pb-2">
                <h2 className="text-3xl font-bold uppercase tracking-wide flex items-center">Latest<br />  Releases
                    <Image
                        src="/NewArrivals.png"
                        alt="Staml image"
                        width={100}
                        height={100}
                        className="rounded-full"
                        priority={true}
                    />
                </h2>
                <p className="text-lg leading-relaxed">
                    Portfolio showcases a range of creative and technical achievements from concept sketches to production ready apps.
                </p>
                <p className="italic text-stone-900">
                    Browse through case studies and live demos to see the works in action.
                </p>
                <button className="mt-4 px-4 py-2 border border-dashed border-stone-800 text-stone-800 hover:bg-backgroundReverse hover:text-foregroundReverse transition">
                    View Portfolio
                </button>
            </article>
        </section>
    );
};

export default Intro;
