import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

import { api } from '../services/api'


type Message = {
    id: string,
    text: string,
    user: {
        name: string,
        email: string,
        avatar_url: string
    }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:3333')

socket.on('new_message', newMessage => {
    messagesQueue.push(newMessage)
})

export function MessageList() {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        setInterval(() => {
            if(messagesQueue.length > 0) {
                setMessages(prevState => [
                    messagesQueue[0],
                    ...prevState
                ].filter(Boolean))

                messagesQueue.shift()
            }
        }, 3000)
    }, [])

    useEffect(() => {
        api.get<Message[]>('messages/latest').then(res => {
            setMessages(res.data)
        })
    }, [])

    return (
        <ul>
            {messages.length > 0 && messages.map((message, key) => {
                return (
                   <li key={key} className="mt-5">
                       <p>{message.text}</p>
                       <p>{message.user.name}</p>
                       <p>{message.user.email}</p>
                       <p>{message.user.avatar_url}</p>
                   </li>
                )
            })} 
        </ul>
    )
}