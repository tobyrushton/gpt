'use client'
import { FC, useEffect } from "react"
import { useConversations } from "./ConversationProvider"
import { containsCodeSnippet, splitCodeSnippet } from "@/utils/handleCode"
import { marked } from 'marked'
import hljs from "highlight.js"
import styles from './page.module.css'

export const Messages: FC = () => {
    const { conversations } = useConversations()

    useEffect(() => {
        hljs.highlightAll()
    },[])
    
    return (
        <>
            {conversations.map((conversation, i) => (
                <pre className={`${styles.message} ${conversation.role === 'user' ? styles.message_user: ''}`} key={i}>
                    {containsCodeSnippet(conversation.content) ? splitCodeSnippet(conversation.content).map((text, i) => (
                        text.isCode ? <div dangerouslySetInnerHTML={{__html: marked(text.text)}} key={i} /> : text.text
                    )) : conversation.content}
                </pre>
            ))}
        </>
    )
}