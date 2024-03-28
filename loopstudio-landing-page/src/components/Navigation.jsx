import logo from '../assets/images/logo.svg'

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="loopstudio logo" />
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    </nav>
  )
}

export default Navigation