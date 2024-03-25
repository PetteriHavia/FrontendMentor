import profileImg from '../assets/images/image-amy.webp'

const About = () => {
  return (
    <section className="about-section">
      <div className="profile-img">
        {/*<img src={profileImg} alt="profile" />*/}
      </div>
      <div className="about-text">
        <h2>I’m Amy, and I’d love to work on your next project</h2>
        <p>I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
        <button className="button secondary-button">Free Consultation</button>
      </div>
    </section>
  )
}

export default About