import sunnysideLogo from '../assets/images/desktop/logo.svg'
import Links from './Links'
import facebook from '../assets/images/desktop/icon-facebook.svg'
import instagram from '../assets/images/desktop/icon-instagram.svg'
import twitter from '../assets/images/desktop/icon-twitter.svg'
import pinterest from '../assets/images/desktop/icon-pinterest.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={sunnysideLogo} alt="sunnyside logo" />
      <div className="link-container">
        <Links />
      </div>
      <div className="socials">
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={twitter} alt="twtter logo" />
        <img src={pinterest} alt="pinterest logo" />
      </div>
    </footer>
  )
}

export default Footer