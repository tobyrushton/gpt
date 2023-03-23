'use client'

import { createContext, FC, useMemo, useState, useContext } from "react"

export type Conversation = {
    role: string
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

    const newMessage = (message: string) => {
        
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