import toast from 'react-hot-toast'
import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import { AuthContext } from '../contexts/AuthContext'
import { api } from '../services/api'


export function SendMessageForm() {
    const { user } = useContext(AuthContext)

    const [message, setMessage] = useState('')

    async function handleSendMessage(e: FormEvent) {
        e.preventDefault()

        if (!message.trim()) {
            return
        }

        await api.post('messages', { message })

        setMessage('')
        toast.success('Mensagem enviada com sucesso!')
    }

    const buttonStyles = 'self-end bg-pink-450 text-white m-4 px-7 h-10 text-sm font-bold uppercase rounded-sm'

    return (
        <div className="p-4 self-center w-full sm:w-96 lg:flex-1 flex flex-col items-center text-center rounded-sm" style={{ maxWidth: '400px', background: '#1B1B1F' }}>
            {user 
                ? (
                    <header className="flex md:flex-col items-center gap-5 md:gap-0">
                        <div className="p-1 bg-gradient-to-r from-pink-450 to-yellow-450 rounded-full leading-none">
                            <img 
                                src={user?.avatar_url} 
                                alt={user?.name} 
                                className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-black-850"
                            />
                        </div>

                        <strong className="text-xl md:text-2xl leading-8 md:mt-4 text-white">{user?.name}</strong>

                        <span className="hidden md:flex items-center gap-2">
                            <VscGithubInverted size="16" />
                            {user?.login}
                        </span>
                    </header>
                )
                : (
                    <a 
                        href="#Main"
                        className="text-white font-bold text-xl mt-3 px-2 underline hover:text-gray-200 transition-colors" 
                    >
                        Faça o login para deixar sua mensagem
                    </a>
                )
            }

            <form onSubmit={handleSendMessage} className="flex flex-col self-stretch mt-4 md:mt-8 bg-black-750 rounded-sm">
                <label 
                    htmlFor="message" 
                    className="py-2 px-4 md:py-4 text-lg font-bold text-left" 
                    style={{ background: '#29292E' }}
                >
                    Mensagem
                </label>

                <textarea 
                    name="message"
                    id="message"
                    placeholder="Qual sua expectativa para o evento?"
                    className="bg-transparent border-none p-4 resize-none h-28 md:h-40 leading-6 focus:outline-none placeholder-opacity-40"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                />

                {user 
                    ? (
                        <button 
                            type="submit" 
                            className={buttonStyles}
                        >
                            Enviar mensagem
                        </button>
                    )
                    : (
                        <button disabled className={`${buttonStyles} opacity-50 cursor-not-allowed`}>
                            Enviar mensagem
                        </button>
                    )
                }
            </form>
        </div>
    )
}