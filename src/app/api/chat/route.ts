import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables'
// import { formatDocumentsAsString } from 'langchain/util/document';
// import { CharacterTextSplitter } from 'langchain/text_splitter';
import fs from 'fs/promises';
import path from 'path';


export const dynamic = 'force-dynamic'

const token = process.env.GITHUB_KEY;
const endpoint = "https://models.github.ai/inference";

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE =
    `Answer the user's questions based only on the following context provided. 
If the answer is not in the context, reply politely that you do not have that information available. 
You should also remember facts from the conversation history.:
==============================
Context: {context}
==============================
Current conversation: {chat_history}

user: {question}
assistant:`;


export async function POST(req: Request) {
    try {

        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages[messages.length - 1].content;

        const filePath = path.join(process.cwd(), 'src/app/api/context.txt');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log("fileContent", fileContent)

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: token,
            model: 'openai/gpt-4.1',
            configuration: {
                baseURL: endpoint,
            },
            temperature: 0.8,
            streaming: true,
            verbose: true,
        });

        const parser = new HttpResponseOutputParser();

        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => fileContent,
            },
            prompt,
            model,
            parser,
        ]);

        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (error: unknown) {
        return Response.json({ error });
    }
}