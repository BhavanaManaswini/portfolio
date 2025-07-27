const GetInTouch = () => {
    return (
        <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="text-6xl w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                    Get
                </li>
                <li>
                    In
                </li>
                <li>
                    Touch
                </li>
                <li>
                    -
                </li>
                <li className="bg-backgroundReverse text-foregroundReverse rounded-lg p-2 cursor-pointer">
                    <a href="mailto:bhavanamanaswi@gmail.com">EMAIL</a>
                </li>
                <li>
                    Need
                </li>
                <li>
                    a
                </li>
                <li className="bg-backgroundReverse text-foregroundReverse rounded-lg p-2">
                    WEBSITE
                </li>
                <li>
                    ?
                </li>
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                <li>
                    Get
                </li>
                <li>
                    In
                </li>
                <li>
                    Touch
                </li>
                <li>
                    -
                </li>
                <li className="bg-backgroundReverse text-foregroundReverse rounded-lg p-2 cursor-pointer">
                    <a href="mailto:bhavanamanaswi@gmail.com">EMAIL</a>
                </li>
                <li>
                    Need
                </li>
                <li>
                    a
                </li>
                <li className="bg-backgroundReverse text-foregroundReverse rounded-lg p-2">
                    WEBSITE
                </li>
                <li>
                    ?
                </li>
            </ul>
        </div>
    )
}

export default GetInTouch
