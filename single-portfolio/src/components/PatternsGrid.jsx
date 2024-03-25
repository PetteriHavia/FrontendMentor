import graphicDesign from '../assets/svg/pattern-graphic-design.svg'
import ui from '../assets/svg/pattern-ui-ux.svg'
import apps from '../assets/svg/pattern-apps.svg'
import photography from '../assets/svg/pattern-photography.svg'
import motionGraphics from '../assets/svg/pattern-motion-graphics.svg'
import illustrations from '../assets/svg/pattern-illustrations.svg'

const PatternsGrid = () => {
  return (
    <>
      <section className="hero-text">
        <h1>Design solutions made easy</h1>
        <p>With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
      </section>
      <section className="grid-container">
        <div className="grid-item design">
          <img src={graphicDesign} />
          <h2>Graphic Design</h2>
        </div>
        <div className="grid-item ui">
          <img src={ui} />
          <h2>UI/UX</h2>
        </div>
        <div className="grid-item apps">
          <img src={apps} />
          <h2>Apps</h2>
        </div>
        <div className="grid-item photography">
          <img src={photography} />
          <h2>Photography</h2>
        </div>
        <div className="grid-item illustrations">
          <img src={illustrations} />
          <h2>Illusrations</h2>
        </div>
        <div className="grid-item motion">
          <img src={motionGraphics} />
          <h2>Motion Graphics</h2>
        </div>
      </section>
    </>
  )
}

export default PatternsGrid