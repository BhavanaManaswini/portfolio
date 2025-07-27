import { Icons } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

const DSATracker = () => {
    return (
        <section className="">
            <h1 className="w-full text-center text-4xl md:text-5xl font-bold bg-backgroundReverse text-foregroundReverse mb-4">
                DSAlgoVault
            </h1>
            <section className='flex gap-2 flex-col md:flex-row'>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="">
                        Most students struggle with unstructured DSA preparation - not knowing where to begin, which patterns to practice, or how many questions to solve per topic. Without guidance, they waste time on random problems, miss key patterns, and can&apos;t track comprehensive progress.
                    </p>
                </section>
                <section className='p-2 border-2 rounded-lg basis-1/2'>
                    <h3 className="text-2xl font-bold mb-4">My Solution</h3>
                    <p className=" mb-4">
                        I built a personalized DSA tracker to help users organize, practice,
                        and monitor their learning efficiently with:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Curated topic-wise roadmaps designed by top coders</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Customizable problem sets with Excel upload feature</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-backgroundReverse mr-2">•</span>
                            <span>Progress tracking with visual analytics</span>
                        </li>
                    </ul>
                </section>
            </section>
            <section className='w-full add-bg relative border-t-2 border-b-2 p-2 my-4'>
                <Image src="/dsa-tracker.png" alt="dsa-tracker" width={1000} height={500} className="w-full md:w-3/4 object-contain my-2 mx-auto rounded-lg" />
                <Link href="https://dsatracker-upyourgame.vercel.app/" target="_blank" className='absolute -bottom-0 right-0 bg-backgroundReverse text-foregroundReverse p-2 rounded-lg border-2 border-borderReverse'>Live Demo<Icons.extlink className='inline size-6 mx-2' /></Link>
            </section>
            <section className="my-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <h3 className="text-2xl col-span-1 md:col-span-2 font-bold text-center">Key Features</h3>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.auth className='inline size-8 mx-2' />Authentication & Security</h4>
                    <p>
                        Next-Auth for secure login/signup with email verification and protected routes for user-specific data.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.upload className='inline size-8 mx-2' />DSA Problem Management</h4>
                    <p>
                        4 pre-loaded DSA cheat sheets plus custom sheet creation via Excel upload.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.interactive className='inline size-8 mx-2' />Interactive Analytics</h4>
                    <p>
                        Visual progress tracker showing solved vs total questions per sheet
                        along with topics covered, plus Pomodoro timer integration.
                    </p>
                </div>
                <div className="p-2 m-2 rounded-xl shadow-md hover:shadow-lg transition border border-dashed">
                    <h4 className="text-xl text-center font-semibold mb-2"><Icons.validation className='inline size-8 mx-2' />Validation</h4>
                    <p>
                        React Hook Form + Zod for auth flows and Formik + Yup for Excel sheet upload validation with Real-time
                        error highlighting
                    </p>
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-bold text-center mb-2">Tech Stack</h3>
                <div className="flex flex-wrap justify-center gap-4 md:mx-20">
                    {[
                        'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux',
                        'React Hook Form', 'Formik', 'Zod', 'Yup',
                        'React Query', 'TanStack Table', 'Shadcn',
                        'MongoDB', 'Mongoose', 'ExcelJS', 'Recharts'
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
                        <h4 className="text-xl italic mb-2">Optimistic UI for Instant Feedback</h4>
                        <ul className="">
                            When updating question status or marking it for review, API delays created poor UX. Solved by:
                            <li className="flex items-start">
                                <span className="text-backgroundReverse mr-2">•</span>
                                <span>Immediately updating Redux store with expected response</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-backgroundReverse mr-2">•</span>
                                <span>Implementing rollback logic if API failed</span>
                            </li>
                        </ul>
                    </article>
                    <article className='rounded-lg p-2 flex-1'>
                        <h4 className="text-xl italic mb-2">Efficient Data Fetching</h4>
                        <ul className="">
                            Custom sheet loading was slow due to repeated API calls. Fixed by:
                            <li className="flex items-start">
                                <span className="text-backgroundReverse mr-2">•</span>
                                <span>Implementing React Query for cached API responses</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-backgroundReverse mr-2">•</span>
                                <span>Implemented fallback loader while fetching</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-backgroundReverse mr-2">•</span>
                                <span>60% reduction in loading times</span>
                            </li>
                        </ul>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default DSATracker;
