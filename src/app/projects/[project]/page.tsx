import React from 'react'
import DSATracker from '../_CaseStudies/DSATracker';
import Scriptoria from '../_CaseStudies/Scriptoria';
import Portfolio from '../_CaseStudies/Portfolio';

const Page = ({ params }: { params: { project: string } }) => {

    const { project } = params
    return (
        <main className="flex flex-col w-full bg-background min-h-[calc(90vh)]">
            {project === "dsa-tracker" && <DSATracker />}
            {project === "scriptoria" && <Scriptoria />}
            {project === "portfolio" && <Portfolio />}
        </main>
    )
}

export default Page;

export async function generateStaticParams() {
    const prjs = ['dsa-tracker', 'scriptoria', 'portfolio']

    return prjs.map((prj) => ({
        project: prj,
    }))
}