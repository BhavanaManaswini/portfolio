import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const MyMap = dynamic(() => import('../Map/MyMap'), { ssr: false });

const projects = [
    { title: 'DSA tracker', description: 'A platform to practice and track progress in Data Structures and Algorithms.', href: '/projects/dsa-tracker', img: '/dsatracker_blob.png' },
    { title: 'Scriptoria', description: 'A digital platform for reading, writing, and managing educational e-books.', href: '/projects/scriptoria', img: '/scriptoria_blob.png' },
    { title: 'Portfolio', description: 'A sleek personal portfolio designed to showcase expertise in an interactive format.', href: '/projects/portfolio', img: '/portfolio_blob.png' },

]

const Projects = () => {
    return (
        <section id="works" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 flex justify-center'>
            {projects.map((project) => (
                <article key={project.title} className='flex flex-col justify-center items-center flex-1 gap-4'>
                    <Image priority src={project.img} width={450} height={450} alt={project.title} className='transition duration-300 ease-in-out hover:scale-95 w-auto h-auto px-8 sm:px-4 md:px-2' />
                    <GetProject key={project.title} title={project.title} description={project.description} href={project.href} />
                </article>
            ))}

            <article className='w-full flex md:col-span-3 justify-center items-center relative'>
                <GetAboutMe />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden md:flex rotate-180 absolute top-0 w-full h-auto z-0'>
                    <path fill="#F8AFA6" fill-opacity="1" d="M0,64L6.2,80C12.3,96,25,128,37,128C49.2,128,62,96,74,80C86.2,64,98,64,111,106.7C123.1,149,135,235,148,229.3C160,224,172,128,185,128C196.9,128,209,224,222,272C233.8,320,246,320,258,304C270.8,288,283,256,295,245.3C307.7,235,320,245,332,234.7C344.6,224,357,192,369,154.7C381.5,117,394,75,406,58.7C418.5,43,431,53,443,96C455.4,139,468,213,480,224C492.3,235,505,181,517,133.3C529.2,85,542,43,554,69.3C566.2,96,578,192,591,197.3C603.1,203,615,117,628,106.7C640,96,652,160,665,202.7C676.9,245,689,267,702,245.3C713.8,224,726,160,738,149.3C750.8,139,763,181,775,176C787.7,171,800,117,812,80C824.6,43,837,21,849,42.7C861.5,64,874,128,886,138.7C898.5,149,911,107,923,122.7C935.4,139,948,213,960,224C972.3,235,985,181,997,138.7C1009.2,96,1022,64,1034,64C1046.2,64,1058,96,1071,96C1083.1,96,1095,64,1108,85.3C1120,107,1132,181,1145,197.3C1156.9,213,1169,171,1182,144C1193.8,117,1206,107,1218,133.3C1230.8,160,1243,224,1255,213.3C1267.7,203,1280,117,1292,80C1304.6,43,1317,53,1329,53.3C1341.5,53,1354,43,1366,69.3C1378.5,96,1391,160,1403,181.3C1415.4,203,1428,181,1434,170.7L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='hidden md:flex absolute bottom-0 w-full h-1/2 z-0' width="100%" preserveAspectRatio="none">
                    <path fill="#F8AFA6" fill-opacity="1" d="M0,160L10,165.3C20,171,40,181,60,165.3C80,149,100,107,120,112C140,117,160,171,180,176C200,181,220,139,240,144C260,149,280,203,300,202.7C320,203,340,149,360,154.7C380,160,400,224,420,218.7C440,213,460,139,480,138.7C500,139,520,213,540,250.7C560,288,580,288,600,250.7C620,213,640,139,660,138.7C680,139,700,213,720,218.7C740,224,760,160,780,144C800,128,820,160,840,176C860,192,880,192,900,165.3C920,139,940,85,960,58.7C980,32,1000,32,1020,69.3C1040,107,1060,181,1080,208C1100,235,1120,213,1140,213.3C1160,213,1180,235,1200,250.7C1220,267,1240,277,1260,261.3C1280,245,1300,203,1320,186.7C1340,171,1360,181,1380,170.7C1400,160,1420,128,1430,112L1440,96L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path>
                </svg>
            </article>
        </section>
    )
}

export default Projects

const GetProject = ({ title, description, href }: { title: string, description: string, href: string }) => {
    return (
        <section className="group flex flex-grow">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front face with text */}
                <article className="col-span-1 w-full h-full border-2 p-2 rounded-lg">
                    <section className="border-2 border-dashed h-full p-2 rounded-lg flex flex-col justify-between">
                        <div>
                            <h2 className="w-full italic font-bold">{title}<Icons.cursor className='size-6 inline mx-2' /></h2>
                            <p className="font-mono text-sm">{description}</p>
                        </div>
                    </section>
                </article>
                {/* Back face with image */}
                <div
                    className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center border-2 border-black"
                >
                    <Link
                        href={href}
                        className={`bg-black/30 backdrop-blur-xs h-full flex w-full justify-center items-center rounded-md`}
                    >
                        <p className='w-fit bg-black text-[antiquewhite] p-2 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#fc8e81] hover:text-white rounded-lg'>Know More <Icons.forward className="size-6 inline" /></p>
                    </Link>

                </div>
            </div>
        </section>

    )
}

const GetAboutMe = () => {
    return (
        <section id="about" className="group flex rounded-lg z-10">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front face with text */}
                <Image
                    src="/AboutMe.png"
                    alt="Staml image"
                    width={200}
                    height={400}
                    className="h-full w-auto max-w-full rounded-xl"
                    priority={true}
                />
                {/* Back face with image */}
                <div
                    className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center border-2 border-black"
                >
                    <MyMap />

                </div>
            </div>
        </section>

    )
}