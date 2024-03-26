import pageLogo from '../assets/images/desktop/logo.svg'
import Links from './Links'

const Navigation = () => {
  return (
    <nav>
      <div className="navigation-container">
        <img src={pageLogo} />
        <div className="link-container">
          <Links />
          <button>CONTACT</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation