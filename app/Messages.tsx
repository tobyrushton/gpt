'use client'
import { FC } from "react"
import { useConversations } from "./ConversationProvider"
import styles from './page.module.css'

export const Messages: FC = () => {
    const { conversations } = useConversations()
    
    return (
        <>
            {conversations.map((conversation, i) => (
                <p className={`${styles.message} ${conversation.role === 'user' ? styles.message_user: ''}`} key={i}>
                    {conversation.content}
                </p>
            ))}
        </>
    )
}