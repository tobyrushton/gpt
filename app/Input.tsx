'use client'

import { FC, useState } from "react"
import { useConversations } from "./ConversationProvider"
import styles from './page.module.css'

export const Input:FC = () => {
    const [message, setMessage] = useState('')

    const { newMessage } = useConversations()

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            newMessage(message)
            setMessage('')
        }}
        >
        <input 
            className={styles.input}
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="Type your message here..."
        />
        </form>
    )
}