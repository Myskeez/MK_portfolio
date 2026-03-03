import * as React from "react";

type Box = "simpleBox" | "leftBox" | "rightBox"

type Props = {
    kind?: Box,
    children?: React.ReactNode
}

export default function GlassBox({
    kind = "simpleBox",
    children
                                 }:Props) {
    return (
        <div className={`glass ${kind}`}>
            {children}
        </div>
    )
}