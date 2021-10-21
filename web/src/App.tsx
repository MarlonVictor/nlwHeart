import { HeaderComponent } from './components/HeaderComponent'
import { MainContent } from './components/MainContent'
import { SendMessageForm } from './components/SendMessageForm'

import HomeImage from './assets/dowhile-home.png'

import { VscArrowRight } from 'react-icons/vsc'


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

            <section id="Opinions" className="h-screen">
                <p>Opiniões</p>
            </section>

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
        </>
    )
}

export default App