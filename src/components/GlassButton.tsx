import * as React from "react";

type kind = "round" | "text"

type Props = {
    className?: string
    children?: React.ReactNode
    kind?: kind
    style?: React.CSSProperties
}

export default function GlassButton({
    className,
    children,
    kind = "text",
    style
                                    }:Props) {
    let btn = ""

    if (kind === "text") {
        btn = "txtBtn"
    } else {
        btn = "rndBtn"
    }

    return (
        <button className={`glass ${btn} ${className ?? ""}`} style={style}>{children}</button>
    )
}