import { Configuration, OpenAIApi } from "openai"
import { Conversation } from "@/app/ConversationProvider"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url)

    if(!searchParams.get('messages')) return new Response('No messages provided', { status: 400 })

    const messages = JSON.parse(searchParams.get('messages') as string) as Conversation[]

    const message = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages
    })

    return new Response(JSON.stringify(message.data.choices[0].message), {
        headers: {
            'content-type': 'application/json',
        }
    })
}