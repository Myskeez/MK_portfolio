import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main className='main'>
                <Outlet />
            </main>
            <footer style={{ display: 'flex', flexDirection: 'column', padding: "1em 0", borderTop: "1px solid var(--text-color)" }}>
                <span style={{ margin: "0 auto" }}>
                    <small>© {new Date().getFullYear()} My Portfolio</small>
                </span>
            </footer>
        </div>
    )
}