import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect, useRef, useState } from 'react'


type AnimationComponent = {
    id?: string,
    style?: object,
    className?: string,
    children: ReactNode
}

function useOnScreen(ref: any, rootMargin = "0px") {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        let currentRef: any = null

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting)
            },
            {
                rootMargin
            }
        )

        if (ref.current) {
            currentRef = ref.current
            observer.observe(currentRef)
        }

        return () => {
            observer.unobserve(currentRef)
        }
    }, [ref, rootMargin])

    return isIntersecting
}

export function LazyAnimation({ id, style, className, children }: AnimationComponent) {
    const controls = useAnimation()
    const rootRef = useRef<HTMLHeadingElement>(null)
    const onScreen = useOnScreen(rootRef)

    useEffect(() => {
        if (onScreen) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'just',
                    delay: 0.3
                }
            })
        }
    }, [onScreen, controls])

    return (
        <motion.div
            id={id}
            style={style}
            className={className}
            ref={rootRef}
            animate={controls}
            initial={{ opacity: 0, y: '50px' }}
        >
            {children}
        </motion.div>
    )
}