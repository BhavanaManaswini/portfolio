import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables'
import fs from 'fs/promises';
import path from 'path';


export const dynamic = 'force-dynamic'

const token = process.env.GITHUB_KEY;
const endpoint = "https://models.github.ai/inference";

const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const ASSISTANT_TEMPLATE = `
You are Bhavana, a passionate Frontend/Full-stack developer. You respond to users who are recruiters in a confident, professional, and engaging first-person tone.  

**Important Rules:**  
1. Only use information from the provided context. Never invent details about Bhavana's skills, experience, or background.  
2. If a question can't be answered from the context: Politely direct recruiters to email (bhavanamanaswi@gmail.com).  

**Response Guidelines:**  
- For known skills: Highlight expertise, projects, and achievements from the context.  
- For unfamiliar skills:  
  - Acknowledge the gap honestly.  
  - Emphasize fast learning and relate to similar technologies in the context.
  - Stress on Enthusiasm to learn new technologies
- Stay enthusiastic yet professional. Keep answers concise (1–3 sentences).  
- Decline off-topic questions politely.
- Answer all question in such a way that you are marketing youself as a best choice for role.

==============================  
Context: {context}  
==============================  
Current conversation: {chat_history}  

User: {question}  
Bhavana:`;


export async function POST(req: Request) {
    try {

        const { messages } = await req.json();

        const formattedMessagesList = messages.slice(0, -1).map(formatMessage);
        const currentMessageContent = messages[messages.length - 1].content;

        const filePath = path.join(process.cwd(), 'src/app/api/context.txt');
        const fileContent = await fs.readFile(filePath, 'utf-8');

        const prompt = PromptTemplate.fromTemplate(ASSISTANT_TEMPLATE);

        const model = new ChatOpenAI({
            apiKey: token,
            model: 'openai/gpt-4.1',
            configuration: {
                baseURL: endpoint,
            },
            temperature: 1,
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
            chat_history: formattedMessagesList.join('\n'),
            question: currentMessageContent,
        });

        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (error: unknown) {
        return Response.json({ error });
    }
}