import robot from '../assets/images/image-curiosity.jpg'
import earth from '../assets/images/image-deep-earth.jpg'
import fisheye from '../assets/images/image-fisheye.jpg'
import above from '../assets/images/image-from-above.jpg'
import car from '../assets/images/image-grid.jpg'
import arcade from '../assets/images/image-night-arcade.jpg'
import borealis from '../assets/images/image-pocket-borealis.jpg'
import soccer from '../assets/images/image-soccer-team.jpg'

const Gallery = () => {

  const galleryImages = [
    {
      url: earth,
      alt: "deep earth"
    },
    {
      url: arcade,
      alt: "night arcade"
    },
    {
      url: soccer,
      alt: "soccer team vr"
    },
    {
      url: car,
      alt: "the grid"
    },
    {
      url: above,
      alt: "from up above vr"
    },
    {
      url: borealis,
      alt: "pocket borealis"
    },
    {
      url: robot,
      alt: "the curiosity"
    },
    {
      url: fisheye,
      alt: "make it fisheye"
    },
  ]

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-heading">
          <h2>OUR CREATIONS</h2>
          <button>SEE ALL</button>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.url} alt={image.alt} />
              <h3>{image.alt}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery