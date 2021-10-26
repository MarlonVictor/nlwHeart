import { VscArrowRight } from 'react-icons/vsc'

import { HeaderComponent } from './components/HeaderComponent'
import { MainContent } from './components/MainContent'
import { MessageList } from './components/MessageList'
import { SendMessageForm } from './components/SendMessageForm'
import { CountdownContainer } from './components/CountdownContainer'

import HomeImage from './assets/dowhile-home.png'
import { MethodBlock } from './components/MethodBlock'
import { FooterComponent } from './components/FooterComponent'


function App() {
    return (
        <>
            <HeaderComponent />
            
            <main 
                id="Main"
                style={{ height: 'calc(100vh - 50px)'}}
                className="bg-home-background flex justify-center items-center mt-14 mx-auto max-w-5xl"
            >
                <span className="flex-1">
                    <img 
                        src={HomeImage} 
                        alt="DoWhile" 
                        className="w-96"
                    />
                </span>

                <MainContent />
            </main>

            <MessageList />

            <section id="Form" className="bg-opinions-background bg-cover">
                <div className="flex justify-between items-center max-w-5xl mx-auto h-screen">
                    <aside style={{ width: '500px' }}>
                        <h1 className="font-bold text-4xl text-white mb-4">O lançamento oficial do DoWhile 2021 será em breve.</h1>

                        <p className="flex items-center gap-5 text-yellow-450 mb-4">
                            <VscArrowRight 
                                size={24}
                                className="text-pink-450 -translate-y-px transform"
                            />
                            <span>01 e 02 de dezembro</span>  
                        </p>

                        <p className="text-lg">Muito em breve teremos o lançamento oficial do DoWhile. Entre para a lista de espera e compartilhe conosco suas expectativas sobre o evento.</p>
                    </aside>
                    <SendMessageForm />
                </div>
            </section>

            <section id="Methods" className="h-screen mx-auto max-w-5xl flex flex-col justify-center">
                <div className="flex justify-between">
                    <h1 className="font-bold text-4xl pr-36">Método desenhado para acelerar a sua evolução</h1>
                    <p>Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionar profissionalmente</p>
                </div>

                <div className="grid grid-cols-3 mt-28 gap-3">
                    <MethodBlock title="Foco">
                        <p>Programação é um universo infinito, por isso ter foco é o primeiro passo para atingir seus objetivos. Escolha o conteúdo mais alinhada com o seu momento e objetivo e vá direto ao ponto naquilo que faz sentido para para você.</p>
                    </MethodBlock>
                    <MethodBlock title="Grupo">
                        <p>A conexão entre Devs impulsiona seu repertório técnico, suas habilidades comportamentais e sua rede de contatos. Durante o evento, você vai poder interagir com os educators, se conectar com os milhares de devs, ajudar e pedir ajudar.</p>
                    </MethodBlock>
                    <MethodBlock title="Prática">
                        <p>Juntos, vamos desenvolver uma aplicação completa do início ao fim, pra você aprender de forma eficiente e expandir o seu portfólio. Essas horas de código vão te dar confiança e propriedade para tomar as melhores decisões.</p>
                    </MethodBlock>
                </div>
            </section>

            <CountdownContainer />

            <div className="border-t-2 border-gray-500">
                <FooterComponent />
            </div>
        </>
    )
}

export default App