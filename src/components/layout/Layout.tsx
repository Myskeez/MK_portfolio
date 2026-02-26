import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 16px" }}>
            <Navbar />
            <main style={{ padding: "24px 0" }}>
                <Outlet />
            </main>
            <footer style={{ padding: "24px 0", borderTop: "1px solid #e5e5e5" }}>
                <small>© {new Date().getFullYear()} My Portfolio</small>
            </footer>
        </div>
    )
}