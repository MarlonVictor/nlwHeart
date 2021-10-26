import Countdown from 'react-countdown'


type RendererProps = {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean
}

export function CountdownContainer() {
    const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
        if (completed) {
            return <h1>O evento começou!!</h1>

        } else {
            return (
                <div className="min-w-screen h-96 bg-countdown-background flex items-center justify-center px-5 py-5">
                    <div className="text-yellow-100">
                        <h1 className="text-4xl text-center mb-3 font-extralight">O DoWhile2021 começa em:</h1>
                        <div className="text-6xl text-center flex w-full items-center justify-center">
                            <div className="w-24 mx-1 p-2 bg-white text-orange-450 rounded-lg">
                                <div className="font-mono leading-none" x-text="days">{days}</div>
                                <div className="font-mono uppercase text-sm leading-none">Dias</div>
                            </div>
                            <div className="w-24 mx-1 p-2 bg-white text-orange-450 rounded-lg">
                                <div className="font-mono leading-none" x-text="hours">{hours}</div>
                                <div className="font-mono uppercase text-sm leading-none">Horas</div>
                            </div>
                            <div className="w-24 mx-1 p-2 bg-white text-orange-450 rounded-lg">
                                <div className="font-mono leading-none" x-text="minutes">{minutes}</div>
                                <div className="font-mono uppercase text-sm leading-none">Minutos</div>
                            </div>
                            <div className="text-2xl mx-1 font-extralight">e</div>
                            <div className="w-24 mx-1 p-2 bg-white text-orange-450 rounded-lg">
                                <div className="font-mono leading-none" x-text="seconds">{seconds}</div>
                                <div className="font-mono uppercase text-sm leading-none">Segundos</div>
                            </div>
                        </div>
                        <p className="text-sm text-center mt-3">
                            <a href="https://twitter.com/10DowningStreet/status/1363897254340419587" className="underline hover:text-yellow-200" target="_blank">
                                Se inscreva agora
                            </a>
                            , para fazer parte desse evento!
                        </p>
                    </div>
                </div>
            )
        }
    }
    
    return (
        <Countdown 
            date={'2021-12-02T00:00:00'}
            renderer={renderer}
        />
    )
}