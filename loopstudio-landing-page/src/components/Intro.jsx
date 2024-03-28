import headsetVR from '../assets/images/image-interactive.jpg'

const Intro = () => {
  return (
    <section className="intro">
      <div className="container">
        <img src={headsetVR} alt="VR headset" />
        <div className="intro-text">
          <h2>THE LEADER IN INTERACTIVE VR</h2>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro