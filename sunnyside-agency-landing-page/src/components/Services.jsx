import transform from '../assets/images/desktop/image-transform.jpg'
import stand from '../assets/images/desktop/image-stand-out.jpg'
import photography from '../assets/images/desktop/image-photography.jpg'
import graphicDesign from '../assets/images/desktop/image-graphic-design.jpg'

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
          <img src={stand} alt="cup" />
        </div>
        <div className="grid-content">
          <div className="content-wrapper">
            <h2>Learn more Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button>LEARN MORE</button>
          </div>
        </div>
        <div className="grid-image">
          <img src={graphicDesign} alt="graphic design" />
          <div className="grid-image-text">
            <h3>Graphic design</h3>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention</p>
          </div>
        </div>
        <div className="grid-image">
          <img src={photography} alt="photograhpy" />
          <div className="grid-image-text">
            <h3>Photography</h3>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services