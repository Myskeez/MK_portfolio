import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className='navbarContainer'>
            <div className='logo'>
                LOGO
            </div>

            <nav className='navbar'>
                <NavLink to="/" className={({ isActive }) => isActive ? "navLink active" : "navLink"} end>
                    Home
                </NavLink>
                <NavLink to="/work" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                    Work
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "navLink active" : "navLink"}>
                    Contact
                </NavLink>
            </nav>

            <div className='nacIconPlaceholder'></div>
        </header>
    )
}