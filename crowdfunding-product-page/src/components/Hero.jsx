import logo from '../assets/images/logo.svg'
import { useState } from 'react'
import iconClose from '../assets/images/icon-close-menu.svg'
import iconOpen from '../assets/images/icon-hamburger.svg'


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="page logo" />
          <ul className={isOpen ? 'open' : ''}>
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
          </ul>
          <img className="mobile-icon" src={isOpen ? iconClose : iconOpen} alt="mobile menu icon" onClick={() => setIsOpen(!isOpen)} />
        </nav>
      </div>
    </header>
  )
}

export default Hero