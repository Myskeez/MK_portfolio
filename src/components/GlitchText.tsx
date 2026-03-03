import type {JSX} from "react";

type Props = {
    className?: string
    as?: keyof JSX.IntrinsicElements
    text: string
}

export default function GlitchText({
    className,
    as:Tag = 'h1',
    text
                                      }:Props) {
    return <Tag className={className}>
        <span aria-hidden='true'>{text}</span>
        {text}
        <span aria-hidden='true'>{text}</span>
    </Tag>
}