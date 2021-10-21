import { VscGithubInverted } from 'react-icons/vsc'

import { HeaderComponent } from './components/HeaderComponent'

import HomeImage from './assets/dowhile-home.png'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthContext'


function App() {
    const { user, signInUrl } = useContext(AuthContext)

    console.log(user)
    
    return (
        <main className="h-screen bg-home-background relative flex flex-col justify-center items-center">
            <HeaderComponent />
            
            <section className="flex mt-14 mx-auto max-w-5xl">
                <div className="flex-1">
                    <img 
                        src={HomeImage} 
                        alt="DoWhile" 
                        className="w-96"
                    />
                </div>

                <aside className="w-1/3 flex flex-col justify-between">
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

                    <a 
                        href={signInUrl}
                        className="flex items-center justify-center w-52 p-3 rounded-md bg-yellow-450 text-black-950"
                    >
                        <VscGithubInverted />
                        <span className="pl-3">Entrar com o Github</span>
                    </a>
                </aside>
            </section>
        </main>
    )
}

export default App