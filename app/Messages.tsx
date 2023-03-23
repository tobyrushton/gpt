'use client'
import { FC } from "react"
import { useConversations } from "./ConversationProvider"

export const Messages: FC = () => {
    const { conversations } = useConversations()
    
    return (
        <>
            {conversations.map((conversation, i) => (
                <div key={i}>
                    <p>{conversation.role}</p>
                    <p>{conversation.content}</p>
                </div>
            ))}
        </>
    )
}