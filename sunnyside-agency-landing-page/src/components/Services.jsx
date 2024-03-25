import transform from '../assets/images/desktop/image-transform.jpg'
import stand from '../assets/images/desktop/image-stand-out.jpg'

const Services = () => {
  return (
    <section className="services-section">
      <div className="grid">
        <div className="grid-content">
          <div className="content-wrapper">
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="grid-image">
          <img src={transform} alt="sphere" />
        </div>
        <div className="grid-image">
          <picture>
            <img src={stand} alt="cup" />
          </picture>
        </div>
        <div className="grid-content">
          <div className="content-wrapper">
            <h2>Learn more Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="grid">

      </div>
    </section>
  )
}

export default Services