import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const MobileMenu = ({closeMethod}) => {
  return (
    <>
      {/* CLOSE HAMBURGER ICON */}
      <button id="close-nav-menu" onClick={closeMethod}>
        <X/>
      </button>

      {/* NAV LINKS */}
      <ul id='mobile-menu'>
        <li>
          <Link to='/' onClick={closeMethod}>Home</Link>
        </li>
        <li>
          <Link to='/news' onClick={closeMethod}>News</Link>
        </li>
        <li>
          <Link to='/health' onClick={closeMethod}>Health</Link>
        </li>
        <li>
          <Link to='/sports' onClick={closeMethod}>Sports</Link>
        </li>
        <li>
          <Link to='/about' onClick={closeMethod}>About</Link>
        </li>
      </ul>
    </>
  )
}

export default MobileMenu
