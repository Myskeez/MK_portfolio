import * as React from "react";

type kind = "simple" | "left" | "right"

type Props = {
    kind?: kind,
    children?: React.ReactNode
}

export default function GlassBox({
    kind = "simple",
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

    return (
        <div className={`glass ${kindBox}`}>
            {children}
        </div>
    )
}