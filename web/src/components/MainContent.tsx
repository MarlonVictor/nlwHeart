import { useContext } from 'react'
import { VscGithubInverted, VscArrowDown } from 'react-icons/vsc'

import { AuthContext } from '../contexts/AuthContext'


export function MainContent() {
    const { user, signInUrl } = useContext(AuthContext)

    const buttonStyles = 'flex items-center justify-center p-3 rounded-md bg-yellow-450 text-black-950'

    return (
        <aside className="px-10 sm:pr-0 sm:w-96 flex flex-col justify-between">
            <div>
                <h1 className="font-bold text-3xl text-gray-100">
                    Juntos, vamos construir o futuro.
                </h1>
                <h3 className="text-lg text-gray-300">
                    Rocketseat
                </h3>
            </div>

            <p className="my-8 text-gray-100">
                O DoWhile é um evento virtual que reúne todo o ecossistema de programação em busca de um mesmo propósito: construir o futuro. Deixe aqui suas expectativas sobre o evento!!
            </p>

            {user 
                ? (
                    <a href="#Form" className={`w-10 ${buttonStyles}`}>
                        <VscArrowDown />
                    </a>
                )
                : (
                    <a href={signInUrl} className={`w-52 ${buttonStyles}`}>
                        <VscGithubInverted />
                        <span className="pl-3">Entrar com o Github</span>
                    </a>
                )
            }
        </aside>
    )
}