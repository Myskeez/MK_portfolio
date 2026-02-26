import { NavLink } from "react-router-dom"

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    fontWeight: isActive ? 700 : 400,
})

export default function Navbar() {
    return (
        <header style={{ padding: "16px 0", borderBottom: "1px solid #e5e5e5" }}>
            <nav style={{ display: "flex", gap: 16 }}>
                <NavLink to="/" style={linkStyle} end>
                    Home
                </NavLink>
                <NavLink to="/projects" style={linkStyle}>
                    Projects
                </NavLink>
                <NavLink to="/about" style={linkStyle}>
                    About
                </NavLink>
                <NavLink to="/contact" style={linkStyle}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}