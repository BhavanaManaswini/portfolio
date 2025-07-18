'use client'

import { useChat } from "ai/react"
import { useEffect, useRef } from "react"
import MyMarkdown from "../Markdown/Markdown"

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: `api/chat`,
        onError: (e: unknown) => {
            console.error(e)
        }
    })

    const bottomRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <section className="flex flex-col h-full">
            <section className="flex flex-col w-full overflow-hidden flex-1">
                <ul className="h-full flex-grow rounded-lg overflow-y-auto scrollbar-hide flex flex-col gap-4 px-4 py-2">
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
                                    <div className="rouded-t-lg rounded-r-lg rounded-tl-lg p-1 bg-background shadow-md flex flex-col w-3/4">
                                        {isLoading ? (
                                            <div>Loading...</div>
                                        ) : (
                                            <MyMarkdown>{m.content}</MyMarkdown>
                                        )}
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </ul>
            </section>
            <section className="p-2 mt-auto">
                <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
                    <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your question here..."
                        className="w-full flex-1 rounded-lg border bg-transparent px-3 py-2.5 text-sm text-foregroundReverse outline-none transition-colors focus:border-stone-500 focus:outline-none disabled:border-0"
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
