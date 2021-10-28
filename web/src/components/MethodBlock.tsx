import { ReactNode } from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { RiComputerLine, RiFocus2Line } from 'react-icons/ri'


type MethodBlockProps = {
    title: string,
    children: ReactNode
}

export function MethodBlock( props: MethodBlockProps ) {
    return (
        <div className="p-0.5 bg-gradient-to-r from-pink-450 to-orange-450 rounded-sm">
            <div className="bg-black-850 rounded-sm h-full p-3 sm:p-5 md:p-5 md:py-8 flex flex-col">
                <header className="flex gap-3 md:gap-7 items-center mb-3 md:mb-8 text-3xl font-bold text-gray-400">
                    {props.title === 'Grupo' && <HiOutlineUserGroup size={45} />}
                    {props.title === 'Foco' && <RiFocus2Line size={45} />}
                    {props.title === 'Prática' && <RiComputerLine size={45} />}

                    <h1 className="text-white">{props.title}</h1>
                </header>
                <div className="flex-1 justify-center text-gray-300">
                    {props.children}
                </div>
            </div>
        </div>
    )
}