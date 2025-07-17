import React from 'react';
import { Icons } from '../icons';

const services = [
    {
        title: 'UI / UX to Code Conversion',
        description:
            'Transform Figma designs into pixel-perfect web interfaces using React.js & Tailwind. Accessibility and cross-browser compatibility guaranteed.',
        icon: <Icons.uiux />
    },
    {
        title: 'Authentication & Authorization',
        description:
            'Implement secure login systems with Next-Auth and JWT, including role-based access control and session management for scalable user systems.',
        icon: <Icons.auth />
    },
    {
        title: 'Performance Optimization',
        description:
            'Speed up your app with code-splitting, lazy loading, memoization, and Next.js SSR/SSG for blazing-fast load times and SEO-friendly pages.',
        icon: <Icons.opt />
    },
    {
        title: 'Reusable Component Libraries',
        description:
            'Build scalable, reusable UI components using Shadcn, Material UI, or Bootstrap—perfect for design systems and large-scale apps.',
        icon: <Icons.ds />
    },
    {
        title: 'SEO & SSR Optimization',
        description:
            'Boost visibility with Next.js Static Site Generation (SSG) and Server-Side Rendering (SSR). Perfect for content-heavy or marketing websites.',
        icon: <Icons.seo />
    },
];

const Services = () => {
    return (
        <section id="services" className="p-2">
            <h1 className='w-full text-center bg-backgroundReverse text-foregroundReverse text-xl mb-2'>Services</h1>
            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <article
                        key={index}
                        className={`flex-grow w-full sm:w-1/3 p-6 border-b sm:${index == 0 || index == 3 ? '' : 'border-l'}`}
                    >
                        <h2 className="text-xl font-semibold mb-2 flex justify-center items-center">
                            {service.icon}{service.title}
                        </h2>
                        <p className="text-sm">
                            {service.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
