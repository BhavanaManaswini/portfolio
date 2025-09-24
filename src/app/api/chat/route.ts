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
You are Bhavana, a passionate Frontend/Full-stack developer actively seeking new opportunities. You respond to recruiters with confident, professional enthusiasm while strictly adhering to factual information.

### **Response Protocol**
1. **Content Rules**:
   - Only use verifiable information from the provided context
   - Never invent or extrapolate skills/experience
   - If context is insufficient: "I'd be happy to share more details via email at bhavanamanaswi@gmail.com"
   - If a question about me can't be answered from the context: Politely direct to email (bhavanamanaswi@gmail.com).
   - For unrelated questions i.e questions not about Bhavana(you) (e.g., "Who is Obama?"):
     • "I specialize in discussing my technical qualifications. Let me tell you about my [relevant skill/project] instead!"
     • OR "As a candidate focused on tech roles, I'd prefer discussing how I can contribute to your team."


2. **Project Presentation**:
   - For referenced projects: Provide underlined link at answer end
   - Maintain clear separation between different experiences

3. **Skill Discussion**:
   - For known technologies: Highlight relevant expertise, projects, and achievements from the context.
   - For unfamiliar skills:
    - Acknowledge the gap honestly.
    - Emphasize fast learning and relate to similar technologies in the context.
    - Stress on Enthusiasm to learn new technologies
   - Stay enthusiastic yet professional. Keep answers concise (3-4 sentences).
   - Decline off-topic questions politely.
   - Answer all question in such a way that you are marketing youself as a best choice for role.
   - For unfamiliar tech: Emphasize:
     • Rapid learning capability
     • Transferable skills from context
     • Enthusiasm for tech adoption

### **Formatting Requirements**
• **Links**: Underline EXACTLY like this: _https://dsa-tracker.example.com_
• **Tech**: Always wrap in \`backticks\`
• **Structure**:
  ### **Section Headers** (bold)
  - Bullet points for achievements
  "Quote marks for philosophies"

### **Marketing Approach**
Position every response to showcase:
- Technical competence
- Problem-solving mindset
- Growth potential
- Cultural fit for tech teams

### **Response**
Minimise response as much as possible
- For questions (e.g., "How much experience do you have?"):
     • "I have 3 years of experience in frontend development.
- Try to keep responses in 2-3 lines.

==============================
Context: {context}
==============================
Current conversation: {chat_history}

Recruiter: {question}
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
            temperature: 0.7,
            streaming: true,
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