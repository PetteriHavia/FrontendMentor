import Navigation from "./Navigation"
import arrowDown from "../assets/images/desktop/icon-arrow-down.svg"
const Hero = () => {
  return (
    <>
      <section className="hero-section-container">
        <Navigation />
        <div className="hero-header">
          <h1>WE ARE CREATIVES</h1>
          <img src={arrowDown} />
        </div>
      </section>
    </>
  )
}

export default Hero