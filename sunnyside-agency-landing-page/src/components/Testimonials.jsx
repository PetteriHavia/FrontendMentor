import emily from '../assets/images/desktop/image-emily.jpg'
import jennie from '../assets/images/desktop/image-jennie.jpg'
import thomas from '../assets/images/desktop/image-thomas.jpg'


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h3>CLIENT TESTIMONIALS</h3>
      <div className="testimonial">
        <div className="client">
          <img src={emily} alt="" />
          <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <div className="client-name">
            <p>Emily R.</p>
            <small>Marketing Director</small>
          </div>
        </div>
        <div className="client">
          <img src={thomas} alt="" />
          <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <div className="client-name">
            <p>Thomas S.</p>
            <small>Chief Operating Officer</small>
          </div>
        </div>
        <div className="client">
          <img src={jennie} alt="" />
          <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <div className="client-name">
            <p>Jennie F.</p>
            <small>Business Owner</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials