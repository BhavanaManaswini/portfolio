import React from 'react'

const Loader = () => {
    return (
        <div className="flex gap-1 items-center h-8 w-fit">
            <div className="w-1 h-full bg-background animate-wave [animation-delay:0s]"></div>
            <div className="w-1 h-full bg-background animate-wave [animation-delay:0.1s]"></div>
            <div className="w-1 h-full bg-background animate-wave [animation-delay:0.2s]"></div>
            <div className="w-1 h-full bg-background animate-wave [animation-delay:0.3s]"></div>
            <div className="w-1 h-full bg-background animate-wave [animation-delay:0.4s]"></div>
        </div>

    )
}

export default Loader
