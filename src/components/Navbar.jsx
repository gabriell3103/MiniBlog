import { NavLink } from 'react-router-dom'

// CSS
import styles from "./Navbar.module.css"

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">
            Mini <span>Blog</span>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar