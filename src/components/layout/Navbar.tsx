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
        </header>
    )
}