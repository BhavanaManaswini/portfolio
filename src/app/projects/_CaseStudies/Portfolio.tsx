import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <section className="">
            <h1 className="w-full text-center text-4xl md:text-5xl font-bold bg-backgroundReverse text-foregroundReverse mb-4">
                Portfolio
            </h1>
            <section className='flex gap-2 flex-col md:flex-row'>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="">
                        Traditional resumes are static documents that don&apos;t engage recruiters or
                        answer their specific questions. They provide the same information to
                        everyone, regardless of what the viewer actually wants to know.                    </p>
                </section>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">My Solution</h3>
                    <p className=" mb-4">
                        I built an interactive portfolio with an AI chatbot that:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Answers questions about my skills, experience, and projects in natural conversation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Showcases detailed case studies with live demos and tech details</span>
                        </li>
                    </ul>
                </section>
            </section>
            <section className='w-full add-bg relative border-t-2 border-b-2 p-2 my-4'>
                <Image src="/portfolio.png" alt="portfolio" width={1000} height={500} className="w-full md:w-3/4 object-contain my-2 mx-auto rounded-lg" />
                <Link href="https://bhavana-manaswini-p.vercel.app/" target="_blank" className='absolute -bottom-0 right-0 bg-backgroundReverse text-foregroundReverse p-2 rounded-lg border-2 border-borderReverse'>Live Demo<Icons.extlink className='inline size-6 mx-2' /></Link>
            </section>
            <section className="my-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                <h3 className="text-2xl col-span-1 md:col-span-3 font-bold text-center">Key Features</h3>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.chat className='inline size-8 mx-2' />AI Chat Assistant</h4>
                    <p>
                        Powered by Langchain.js and OpenAI API, it answers questions like
                        &quot;What&apos;s your experience with React?&quot; or &quot;Show me your frontend
                        projects.&quot;
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.project className='inline size-8 mx-2' />Project Showcase</h4>
                    <p>
                        Detailed case studies with tech stack breakdowns, problem/solution analysis,
                        and embedded live demo links.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.seo className='inline size-8 mx-2' />Optimized Rendering</h4>
                    <p>
                        The chat delivers real-time streaming responses with word-by-word rendering, eliminating wait
                        times. A dynamic typing loader keeps users engaged during processing.
                    </p>
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-bold text-center mb-2">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-4 md:mx-20">
                    {[
                        'Next.js', 'TypeScript', 'Tailwind CSS',
                        'Langchain.js', 'OpenAI API',
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
                        <h4 className="text-xl italic mb-2">AI Context Management</h4>
                        <p className="">
                            Keeping the AI responses focused on my professional background required
                            careful prompt engineering and context window management with Langchain.js.
                        </p>
                    </article>
                    <article className='rounded-lg p-2 flex-1'>
                        <h4 className="text-xl italic mb-2">Stateful Conversations</h4>
                        <p>Implementing persistent chat history while preventing hallucination taught
                            me about conversation memory management in AI applications.</p>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default Portfolio