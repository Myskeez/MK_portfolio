import * as React from "react";

type kind = "round" | "text"

type Props = {
    className?: string
    children?: React.ReactNode
    kind?: kind
    style?: React.CSSProperties
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function GlassButton({
    className,
    children,
    kind = "text",
    style,
    onClick
                                    }:Props) {
    let btn = ""

    if (kind === "text") {
        btn = "txtBtn"
    } else {
        btn = "rndBtn"
    }

    return (
        <button className={`glass ${btn} ${className ?? ""}`} style={style} onClick={onClick}>{children}</button>
    )
}