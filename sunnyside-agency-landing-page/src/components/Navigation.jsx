import pageLogo from '../assets/images/desktop/logo.svg'

const Navigation = () => {
  return (
    <nav>
      <div className="navigation-container">
        <img src={pageLogo} />
        <ul className="nav-ul-links">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li><button>CONTACT</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation