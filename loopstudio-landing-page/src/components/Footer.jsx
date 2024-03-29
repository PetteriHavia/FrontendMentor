import Navigation from "./Navigation"
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'

const Footer = () => {

  const socialMedia = [
    {
      url: facebook,
      alt: "facebook logo",
    },
    {
      url: twitter,
      alt: "twitter logo",
    },
    {
      url: pinterest,
      alt: "pinterest logo",
    },
    {
      url: instagram,
      alt: "instagram logo",
    },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <Navigation menu={"footer-menu"} />
        <div className="media">
          <div className="social-media-icons">
            {socialMedia.map((icon) => (
              <div key={icon.alt}><img src={icon.url} alt={icon.alt} /></div>
            ))}
          </div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer