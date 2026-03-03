import { useEffect, useMemo, useState} from "react"
import type {JSX} from "react";

type Props = {
    className?: string
    as?: keyof JSX.IntrinsicElements
    text: string
    charSet?: string
    minIntMs?: number
    maxIntMs?: number
    minDurMs?: number
    maxDurMs?: number
    minChars?: number
    maxChars?: number
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min
}

export default function GlitchText_V1({
    className,
    as:Tag = 'h1',
    text,
    charSet = '01',
    minIntMs = 2000,
    maxIntMs = 5000,
    minDurMs = 100,
    maxDurMs = 300,
    minChars = 1,
    maxChars = 4,
                                   }: Props) {
    const [rendered, setRendered] = useState(text)

    // whitespaces or '.' should not be replaced
    const replaceableIdx = useMemo(() => {
        const idx:number[] = []

        for (let i = 0; i < text.length; i++) {
            const char = text[i]
            if (char !== ' ' && char !== '.') idx.push(i)
        }

        return idx
    }, [text])

    useEffect(() => {
        const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
        if (reduceMotion) return

        let killed = false
        let timer: number | undefined

        const schedule = () => {
            if (killed) return
            const wait = random(minIntMs, maxIntMs)
            timer = window.setTimeout(() => {
                if (killed) return

                const count = Math.min(
                    random(minChars, maxChars),
                    replaceableIdx.length
                )

                // choose random positions
                const chosen = new Set<number>()
                while(chosen.size < count) {
                    const i = replaceableIdx[random(0, replaceableIdx.length - 1)]
                    chosen.add(i)
                }

                const chars = text.split('')
                chosen.forEach((i) => {
                    chars[i] = charSet[random(0, chars.length - 1)]
                })

                setRendered(chars.join(''))

                const duration = random(minDurMs, maxDurMs)
                window.setTimeout(() => {
                    if (!killed) setRendered(text)
                    schedule()
                }, duration)
            }, wait)
        }

        setRendered(text)
        schedule()

        return () => {
            killed = true
            if (timer) window.clearTimeout(timer)
        }
    }, [text, charSet, minIntMs, maxIntMs, minDurMs, maxDurMs, minChars, maxChars, replaceableIdx])

    return <Tag className={className}>{rendered}</Tag>
}

