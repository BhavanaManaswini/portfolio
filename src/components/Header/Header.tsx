const Header = () => {

    return (
        <>
            <header className='w-full grid grid-cols-2 md:grid-cols-6'>
                <GetDay />
                <h1 className='min-h-20 col-span-2 md:col-span-4 text-5xl items-center text-center flex flex-col border-b '>
                    Frontend Developer
                    <p className='text-sm'>Est. 2022 – You Design. I Develop.</p>
                </h1>
                <GetSpecialEdition />
                <p className="col-span-2 md:col-span-6 text-end pr-4 italic bg-backgroundReverse text-foregroundReverse">
                    - Bhavana Manaswini
                </p>
            </header>
            <hr className="bg-black my-1 h-[1px]" />
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
    return <h6 className='h-auto col-span-2 md:col-span-1 text-sm text-right flex md:flex-col items-right justify-center border-b ' {...props}>
        <b>Special Edition:</b> <i>Frontend Engineer for Hire</i>
    </h6>

}