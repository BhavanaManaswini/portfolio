'use client'

import { useChat } from "ai/react"
import { useEffect, useRef } from "react"
import MyMarkdown from "../Markdown/Markdown"
import Loader from "../Loader/Loader"

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: `api/chat`,
        onError: (e: unknown) => {
            console.error(e)
        }
    })

    const bottomRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (messages.length === 0) return;
        const timer = setTimeout(() => {
            bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
    }, [messages]);

    return (
        <section className="flex flex-col h-full max-h-64 overflow-hidden">
            <section className="flex flex-col w-full overflow-hidden flex-1">
                <ul className="h-full flex-grow rounded-lg overflow-y-auto scrollbar-hide flex flex-col gap-4 px-4 py-2 min-h-48">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rouded-t-lg rounded-l-lg rounded-tr-lg p-1 bg-background shadow-md flex overflow-x-auto scrollbar-hide">
                                        <pre>{m.content}</pre>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row">
                                        <div className="rounded-t-lg rounded-r-lg rounded-tl-lg p-1 bg-background shadow-md w-3/4 overflow-hidden">
                                            <MyMarkdown>{m.content}</MyMarkdown>
                                        </div>
                                </li>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <li className="flex flex-row max-h-8">
                            <div className="rouded-t-lg rounded-r-lg rounded-tl-lg p-1 bg-background shadow-md flex flex-col w-3/4">
                                <Loader />
                            </div>
                        </li>
                    )}
                    <div ref={bottomRef} className="h-0 w-0"/>
                </ul>
            </section>
            <section className="p-2 mt-auto">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Curious about me? Just ask!"
                        className="w-full flex-1 rounded-lg border bg-transparent px-3 py-2.5 text-sm text-foregroundReverse outline-none transition-colors border-stone-500 focus:outline-none disabled:border-0"
                    />
                    <button className="m-1 p-1 rounded-lg bg-background" type="submit">
                        Submit
                    </button>
                </form>
            </section>
        </section>
    )
}

export default Chat
