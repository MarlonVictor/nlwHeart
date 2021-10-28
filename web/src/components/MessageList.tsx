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
        <section id="Opinions" className="h-auto max-w-6xl mx-auto pt-16 pb-24 bg-home-background">
            <ul className="mt-6" style={{ columns: '3', columnGap: '16px', height: '90%' }}>
                {messages.length > 0 && messages.map((message, key) => {
                    return (
                    <li 
                            key={key} 
                            className="bg-black-750 w-full mb-4 p-5 overflow-hidden rounded-sm"
                            style={{ breakInside: 'avoid' }}
                        >
                            <header className="flex gap-3 items-center pb-5 mb-5 border-b-2 border-opacity-10">
                                <div className="p-px bg-gradient-to-r from-pink-450 to-yellow-450 rounded-full leading-none">
                                    <img 
                                        src={message.user.avatar_url} 
                                        alt={message.user.name} 
                                        className="w-16 h-16 rounded-full border-4 border-black-750"
                                    />
                                </div>
                                <h3 className="font-bold text-xl">{message.user.name}</h3>
                            </header>
                            <p>"{message.text}"</p>
                    </li>
                    )
                })} 
            </ul>
        </section>
    )
}