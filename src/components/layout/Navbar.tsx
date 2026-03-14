import { NavLink } from "react-router-dom"
import {useEffect, useState} from "react"
import Spline from '@splinetool/react-spline';
import GlassButton from "../GlassButton"


type Mode = "light" | "dark"
type Phase = "idle" | "in" | "out"

export default function Navbar() {
    // Logic for mode-change button
    const [mode, setMode] = useState<Mode>('light')
    const [phase, setPhase] = useState<Phase>("idle")

    useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark")
    }, [mode])

    const toggleMode = () => {
        if (phase !== "idle") return

        setPhase("out")

        window.setTimeout(() => {
            setMode(prev => (prev === "light" ? "dark" : "light"))
            setPhase("in")
            window.setTimeout(() => {setPhase("idle")}, 250)
        }, 250)
    }

    return (
        <header className='navbarContainer'>
            <div className='logo-container'>
                <Spline className='logo' scene="https://prod.spline.design/JDVJ1BEpJ8Ynd-GE/scene.splinecode"/>
            </div>

            <nav className='navbar'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}
                    data-content='Home'
                    end>
                </NavLink>
                <NavLink
                    to="/work"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}
                    data-content='Work'>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}
                    data-content='About'>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}
                    data-content='Contact'>
                </NavLink>
            </nav>

            <div className='navIconPlaceholder'></div>

            <GlassButton className='modeBtn' kind='round' onClick={toggleMode} aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
                <span className={`iconAnim ${phase}`}>
                    {mode === "light" ? <MoonIcon /> : <SunIcon />}
                </span>
            </GlassButton>
        </header>
    )
}


// SVG icons for modes
function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
            <path
                d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
            <path
                d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}