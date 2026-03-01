import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className='navbarContainer'>
            <div className='logo'>
                LOGO
            </div>

            <nav className='navbar'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}
                    end>
                    Home
                </NavLink>
                <NavLink
                    to="/work"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}>
                    Work
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}>
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "navLink active glass" : "navLink"}>
                    Contact
                </NavLink>
            </nav>

            <div className='navIconPlaceholder'></div>
        </header>
    )
}