import * as React from "react";

type kind = "simple" | "left" | "right"
type widthness = "fixed" | "adjusted"

type Props = {
    kind?: kind,
    widthness?: widthness,
    children?: React.ReactNode
}

export default function GlassBox({
    kind = "simple",
    widthness = "fixed",
    children
                                 }:Props) {
    let kindBox = ""
    if (kind === "simple") {
        kindBox = "box"
    }
    else if (kind === "left") {
        kindBox = "box left"
    }
    else if (kind === "right") {
        kindBox = "box right"
    }

    let widthnessBox = "50vw"
    if (widthness !== "fixed") {
        widthnessBox = "fit-content"
    }

    return (
        <div className={`glass ${kindBox}`} style={{ width: widthnessBox }}>
            {children}
        </div>
    )
}