import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const Scriptoria = () => {
    return (
        <section className="">
            <h1 className="w-full text-center text-4xl md:text-5xl font-bold bg-backgroundReverse text-foregroundReverse mb-4">
                Scriptoria
            </h1>
            <section className='flex gap-2 flex-col md:flex-row'>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="">
                        Book lovers and content creators juggle multiple disconnected platforms - one for reading books, another for writing, and separate tools for note-taking and PDF conversion. This fragmentation forces users to use clunky workarounds.                    </p>
                </section>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">My Solution</h3>
                    <p className=" mb-4">
                        I created Scriptoria as a unified platform that combines:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Access to 10,000+ books via Open Library API</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>A rich tool for writing and saving stories</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>One-click PDF conversion with preserved formatting</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Bookmark Favourites and preserve recent reads</span>
                        </li>
                    </ul>
                </section>
            </section>
            <section className='w-full add-bg relative border-t-2 border-b-2 p-2 my-4'>
                <Image priority src="/scriptoria.png" alt="scriptoria" width={1000} height={500} className="w-full md:w-3/4 object-contain my-2 mx-auto rounded-lg" />
                <Link href="https://scriptoria-mern.netlify.app/" target="_blank" className='absolute -bottom-0 right-0 bg-backgroundReverse text-foregroundReverse p-2 rounded-lg border-2 border-borderReverse'>Live Demo<Icons.extlink className='inline size-6 mx-2' /></Link>
            </section>
            <section className="my-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <h3 className="text-2xl col-span-1 md:col-span-2 font-bold text-center">Key Features</h3>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.book className='inline size-8 mx-2' />Book Discovery</h4>
                    <p>
                        Integrated Open Library API to fetch and read 10,000+ books online with
                        personalized collections (Favourites, Recently Viewed).
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.download className='inline size-8 mx-2' />Download Tool</h4>
                    <p>
                        Integrated PDF download functionality (jspdf) for user written books preserving formatting.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.auth className='inline size-8 mx-2' />Secure Backend</h4>
                    <p>
                        JWT authentication with 1-hour session expiry and Express.js REST APIs
                        for CRUD operations.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.opt className='inline size-8 mx-2' />Performance</h4>
                    <p>
                        Implemented lazy loading components and fallback loaders for smooth
                        user experience even with large book collections.
                    </p>
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-bold text-center mb-2">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-4 md:mx-20">
                    {[
                        'React.js', 'JavaScript', 'Material UI', 'Tailwind CSS',
                        'Node.js', 'Express.js', 'MongoDB', 'JWT',
                        'Cloudinary', 'jspdf', 'Open Library API'
                    ].map((tech) => (
                        <div key={tech} className="px-4 py-2 bg-backgroundReverse rounded-lg shadow-sm border text-foregroundReverse">
                            {tech}
                        </div>
                    ))}
                </div>
            </section>
            <section className="p-2 rounded-xl border-2 my-8">
                <h3 className="text-2xl font-bold text-center mb-6">Challenges & Lessons Learned</h3>
                <section className="flex gap-2 flex-col md:flex-row">
                    <article className='rounded-lg p-2 flex-1'>
                        <h4 className="text-xl italic mb-2">PDF Generation</h4>
                        <p>Generating PDFs from rich text content with jspdf presented formatting challenges.
                            I developed a system to preserve basic formatting while ensuring PDFs remained
                            readable and properly structured.</p>
                    </article>
                    <article className='rounded-lg p-2 flex-1'>
                        <h4 className="text-xl italic mb-2">Large image size</h4>
                        <p>To optimize performance, I used Cloudinary to store book cover images in the cloud while saving
                            only lightweight URL strings in the database, reducing storage needs and improving load speeds
                            dramatically.</p>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default Scriptoria;
