import logo from '../assets/images/logo.svg'
import close from '../assets/images/icon-close.svg'
import open from '../assets/images/icon-hamburger.svg'
import { useState } from 'react'

const Navigation = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    if (!isOpen) {
      setIsOpen(true)
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false)
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      <nav className="nav-reusable">
        <img src={logo} alt="loopstudio logo" />
        <ul className={isOpen ? "vertical-menu" : "horizontal-menu"}>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        {menu !== "main-menu" ? null : (<img src={isOpen ? close : open} className="menu-icon" alt="menu" onClick={openMenu} />)}
      </nav>
      {isOpen && <div className="overlay" onClick={openMenu}></div>}
    </>
  )
}

export default Navigation