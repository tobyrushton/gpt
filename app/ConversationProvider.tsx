'use client'

import { getUrl } from "@/utils/getUrl"
import { createContext, FC, useMemo, useState, useContext } from "react"

export type Conversation = {
    role: 'assistant' | 'user' | 'system'
    content: string
}

export type ConversationContext = {
    conversations: Conversation[]
    newMessage : (message: string) => void
}

export const ConversationContext = createContext<ConversationContext | null>(null)

export const useConversations = () => useContext(ConversationContext) as ConversationContext

const ConversationProvider:FC<{ children: React.ReactNode }> = ({ children }) => {
    const [conversations, setConversations] = useState<Conversation[]>([])

    const newMessage = async (message: string):Promise<void> => {
        const tempMessage:Conversation = { role: 'user', content: message }
        const tempConversations = [...conversations, tempMessage]
        setConversations(tempConversations)
        let response: Response

        try{
            response = await fetch(`${getUrl()}/api/gpt?messages=${JSON.stringify(tempConversations)}`)
        } catch (_) {
            response = new Response(JSON.stringify({ 
                role: 'system', 
                content: 'The response resulted in an error likely due to timing out.'
                        + 'Requests are currently limited to a max of 10 seconds due to netlify hosting limits.'
                        + ' Please try shorten your request.' 
            }))
        }
        
        setConversations([...tempConversations, JSON.parse(await response.text())])
    }

    // memoize the value to prevent re-renders
    const value:ConversationContext = useMemo(() => (
        { conversations, newMessage }
    ),[conversations, newMessage])

    return (
        <ConversationContext.Provider value={value}>
            {children}
        </ConversationContext.Provider>
    )
}

export default ConversationProvider