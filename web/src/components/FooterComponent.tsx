import { VscGithubInverted, VscArrowUp } from 'react-icons/vsc'


export function FooterComponent() {
    return (
        <footer className="flex justify-between items-center max-w-5xl mx-auto py-5">
            <a 
                href="htps://github.com/MarlonVictor"
                target="_blank"
                className="h-6 flex gap-3 items-center border-b-2 border-transparent hover:text-white hover:border-orange-450 transition"
            >
                <VscGithubInverted />
                <h3>MarlonVictor</h3>
            </a>

            <a 
                href="https://dowhile.io/inscricao" 
                target="_blank"
                className="h-6 flex gap-1 items-center border-b-2 border-transparent hover:text-white hover:border-orange-450 transition"
            >
                <strong>Quero participar</strong>
                <h3>do DoWhile2021</h3>
            </a>

            <a href="#" className="bg-black-750 w-10 h-10 flex items-center justify-center rounded hover:filter hover:opacity-75">
                <VscArrowUp size={20} />
            </a>
        </footer>
    )
}