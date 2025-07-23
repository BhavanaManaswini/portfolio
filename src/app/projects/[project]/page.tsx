import React from 'react'

const Page = ({ params }: { params: { project: string } }) => {

    const { project } = params
    return (
        <main className="flex flex-col w-full bg-background min-h-[calc(90vh)]">
            {project}
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