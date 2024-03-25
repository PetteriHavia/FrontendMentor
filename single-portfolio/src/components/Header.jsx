import logo from '../assets/svg/logo.svg'

const Header = () => {
  return (
    <section className="header">
      <img src={logo} />
      <button className="button primary-button">Free Consultation</button>
    </section>
  )
}

export default Header