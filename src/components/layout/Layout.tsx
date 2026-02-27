import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main className='main'>
                <Outlet />
            </main>
            <footer style={{ padding: "24px 0", borderTop: "1px solid var(--text-color)" }}>
                <small>© {new Date().getFullYear()} My Portfolio</small>
            </footer>
        </div>
    )
}