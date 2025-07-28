import Image from "next/image";

const Header = () => {

    return (
        <>
            <header className='w-full grid grid-cols-2 md:grid-cols-6 pb-1'>
                <GetDay />
                <h1 className='min-h-20 col-span-2 md:col-span-4 text-4xl items-center text-center flex flex-wrap justify-center border-b '>
                    <section className="flex flex-col">
                        The Dev Times
                        <p className='text-sm'>Est. 2022 – You Design. I Develop.</p>
                    </section>
                    <Image
                        src="/Frontend.png"
                        alt="Staml image"
                        width={100}
                        height={100}
                        className="rounded-full w-1/8"
                        priority={true}
                    />
                </h1>
                <GetSpecialEdition />
            </header>
        </>
    )
}

export default Header

const GetDay = (props: React.HtmlHTMLAttributes<Element>) => {

    const now = new Date();

    const dayOfMonth = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekName = weekdays[now.getDay()];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <h6 suppressHydrationWarning className='h-auto col-span-2 md:col-span-1 flex gap-2 md:flex-col font-bold text-sm border-b ' {...props}>
            <p>{months[month]}{", "}{dayOfMonth}</p>
            <p>{year}</p>
            <p className='flex-1'></p>
            <p>{dayOfWeekName}</p>
        </h6>
    )
}

const GetSpecialEdition = (props: React.HtmlHTMLAttributes<Element>) => {
    return <h6 className='h-auto col-span-2 md:col-span-1 text-sm text-right flex md:flex-col items-right justify-between border-b ' {...props}>
        <b className="underline decoration-double">Special Edition:</b> <i>Frontend Dev<br className="hidden md:flex"></br> for Hire</i>
    </h6>

}