'use client'

import { useChat } from "ai/react"
import MyMarkdown from "../Markdown/Markdown"
import Loader from "../Loader/Loader"

const Chat = () => {

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: `api/chat`,
        onError: (e: unknown) => {
            console.error(e)
        }
    })

    return (
        <section className="flex flex-col h-full h-96 overflow-hidden bg-backgroundReverse text-foregroundReverse rounded-lg">
            <section className="flex flex-col w-full overflow-hidden flex-1">
                <ul className="h-full flex-grow rounded-lg overflow-y-auto scrollbar-hide flex flex-col gap-4 px-4 py-2 min-h-80 max-h-80">
                    {messages.map((m, index) => (
                        <div key={index}>
                            {m.role === 'user' ? (
                                <li key={m.id} className="flex flex-row-reverse">
                                    <div className="rouded-t-lg rounded-l-lg rounded-tr-lg p-1 bg-background text-foreground shadow-md flex overflow-x-auto scrollbar-hide max-w-3/4">
                                        <pre>{m.content}</pre>
                                    </div>
                                </li>
                            ) : (
                                <li key={m.id} className="flex flex-row">
                                    <div className="rounded-t-lg rounded-r-lg rounded-tl-lg p-1 bg-background text-foreground shadow-md w-3/4 overflow-hidden">
                                        <MyMarkdown>{m.content}</MyMarkdown>
                                    </div>
                                </li>
                            )}
                        </div>
                    ))}
                    {isLoading && (
                        <li className="flex flex-row max-h-8">
                            <div className="rouded-t-lg rounded-r-lg rounded-tl-lg p-1 shadow-md flex flex-col max-w-3/4">
                                <Loader />
                            </div>
                        </li>
                    )}
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
                    <button className="m-1 p-1 rounded-lg bg-background text-foreground" type="submit">
                        Submit
                    </button>
                </form>
            </section>
        </section>
    )
}

export default Chat
