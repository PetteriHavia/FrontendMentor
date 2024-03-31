import Navigation from './Navigation'
import logo from '../assets/images/logo.svg'


const Hero = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="page logo" />
        <Navigation />
      </div>
    </header>
  )
}

export default Hero