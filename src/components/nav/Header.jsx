import { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import { List } from 'react-bootstrap-icons'

const Header = () => {
    const [menuIsOpen, openMenu] = useState(false)

    const toggleMobileMenu = () => {
        openMenu(!menuIsOpen)
        document.body.classList.toggle('no-scroll')
    }

    return (
        <>
            <div id='topNav'>
                {/* LOGO */}
                <div id="logo">
                    <Link to="/">News API</Link>
                </div>

                {/* DESKTOP MENU */}
                <ul id='menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/health'>Health</Link>
                    </li>
                    <li>
                        <Link to='/sports'>Sports</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>

                {/* HAMBURGER ICON */}
                <div className="menu-container">
                    <button id='menuButton' className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id='hamburgerIcon'/>
                    </button>
                </div>

                {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu}/>}
            </div>
        </>
    )
}

export default Header
