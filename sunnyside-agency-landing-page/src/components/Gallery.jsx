import milk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import cone from '../assets/images/desktop/image-gallery-cone.jpg'
import orange from '../assets/images/desktop/image-gallery-orange.jpg'
import sugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
  return (
    <section className="gallery-section">
      <img src={milk} alt="milkbottles" />
      <img src={orange} alt="orange" />
      <img src={cone} alt="ice cream cone" />
      <img src={sugar} alt="sugarcubes" />
    </section>
  )
}

export default Gallery