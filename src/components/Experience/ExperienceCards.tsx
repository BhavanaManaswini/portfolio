import React from 'react'
import { Icons } from '../icons'

const ExperienceCards = () => {
    return (
        <div className="relative w-full min-h-96">
            <div className="absolute top-[0%] left-[0%] w-5/6 h-5/6 rounded-[10px] overflow-hidden transition-all duration-500 ease-out z-[1] hover:z-[4] hover:rotate-[0deg] hover:transform hover:perspective-[1000px] hover:transition-all hover:duration-500 hover:ease-out rotate-[-8deg] bg-emerald-900 flex flex-row">
                <div className="w-[90%] h-full p-5 flex flex-col justify-between items-end bg-emerald-950 transition-transform duration-500 origin-left transform perspective-[2000px] rotate-y-[-90deg] group-hover:rotate-y-[0deg]">
                    <h1 className="text-foregroundReverse">Frontend Developer</h1>
                    <ul className='text-sm text-white overflow-auto'>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Optimized Performance – Reduced re-renders by 40% using React hooks (`useMemo`, `useCallback`) and code-splitting.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>State Management – Scaled app efficiency with Redux Toolkit (RTK), cutting boilerplate by 30%.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>API Integration – Seamlessly integrated REST APIs with robust error handling and loading states.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>UI/UX Improvements – Built reusable components (20% less duplication) and responsive, WCAG-compliant interfaces.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>File Handling – Developed secure file upload/download with validation (Excel).</p></li>
                    </ul>
                    <h1 className="text-foregroundReverse mt-2 italic">Saas Platform Development</h1>
                </div>
                <div className='w-[10%] h-full flex flex-col justify-center items-center gap-2 p-2'>
                    <Icons.react className='size-12' />
                    <Icons.js className='size-12' />
                    <Icons.material className='size-12' />
                    <Icons.redux className='size-12' />
                </div>
            </div>


            <div className="absolute top-[8%] left-[8%] w-5/6 h-5/6 rounded-[10px] overflow-hidden transition-all duration-500 ease-out z-[1] hover:z-[4] hover:rotate-[0deg] hover:transform hover:perspective-[1000px] hover:transition-all hover:duration-500 hover:ease-out rotate-[-8deg] bg-cyan-900 flex flex-row">
                <div className="w-[90%] h-full p-5 flex flex-col justify-between items-end bg-cyan-950 transition-transform duration-500 origin-left transform perspective-[2000px] rotate-y-[-90deg] group-hover:rotate-y-[0deg]">
                    <h1 className="text-foregroundReverse">Next JS Developer</h1>
                    <ul className='text-sm text-white overflow-auto'>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>API Testing Hub – Built a portal to view, test, and trigger APIs with real-time responses.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Auth & Security – Implemented Next-Auth authentication (with JWT) + role-based access control (RBAC).</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Database & APIs – Designed MongoDB schemas and CRUD APIs for product management.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Rendering Optimizations – Leveraged SSR/SSG/ISR for faster load times (~50% improvement).</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Access Control – Developed public/private routes for authenticated user flows.</p></li>
                    </ul>
                    <h1 className="text-foregroundReverse mt-2 italic">API Documentation Portal</h1>
                </div>
                <div className='w-[10%] h-full flex flex-col justify-center items-center gap-2 p-2'>
                    <Icons.next className='size-12' />
                    <Icons.ts className='size-12' />
                    <Icons.nextauth className='size-12' />
                    <Icons.tailwind className='size-12' />
                    <Icons.mongo className='size-12' />
                    <Icons.shadcn className='size-12' />
                </div>
            </div>


            <div className="absolute top-[16%] left-[16%] w-5/6 h-5/6 rounded-[10px] overflow-hidden transition-all duration-500 ease-out z-[1] hover:z-[4] hover:rotate-[0deg] hover:transform hover:perspective-[1000px] hover:transition-all hover:duration-500 hover:ease-out rotate-[-8deg] bg-pink-900 flex flex-row">
                <div className="w-[90%] h-full p-5 flex flex-col justify-between items-end bg-pink-950 transition-transform duration-500 origin-left transform perspective-[2000px] rotate-y-[-90deg] group-hover:rotate-y-[0deg]">
                    <h1 className="text-foregroundReverse">React JS Developer</h1>
                    <ul className='text-sm text-white overflow-auto'>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Shared Component Library – Standardized UI with CSS-in-JS (Styled Components) for consistent theming.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Testing – Achieved 90%+ test coverage with React Testing Library & Jest, reducing QA bugs by 25%.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Analytics – Implemented client-side tagging (Telium) for user behavior tracking.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Custom Hooks – Abstracted complex logic into reusable hooks across projects.</p></li>
                        <li className='flex flex-row justify-start mb-1'><Icons.correct className='size-6 inline-block mr-2' /><p>Microfrontend Architecture – Integrated independently developed epics into a Microfrontend architecture using Module Federation.</p></li>
                    </ul>
                    <h1 className="text-foregroundReverse mt-2 italic">Banking Portal</h1>
                </div>
                <div className='w-[10%] h-full flex flex-col justify-center items-center gap-2 p-2'>
                    <Icons.react className='size-12' />
                    <Icons.js className='size-12' />
                    <Icons.css className='size-12' />
                    <Icons.material className='size-12' />
                </div>
            </div>
        </div>

    )
}

export default ExperienceCards
