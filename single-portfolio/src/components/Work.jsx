import slideOne from '../assets/images/image-slide-1.jpg'
import slideTwo from '../assets/images/image-slide-2.jpg'
import slideThree from '../assets/images/image-slide-3.jpg'
import slideFour from '../assets/images/image-slide-4.jpg'
import slideFive from '../assets/images/image-slide-5.jpg'
import arrowNext from '../assets/svg/icon-arrow-right.svg'
import arrowPrevious from '../assets/svg/icon-arrow-left.svg'
import { useState } from 'react'

const Work = () => {
  const slideImages = [
    slideOne,
    slideTwo,
    slideThree,
    slideFour,
    slideFive
  ]

  const [slides, setSlides] = useState(slideImages)
  const [slideIndex, setSlideIndex] = useState(0)

  const handlePrevSlide = () => {
    const newIndex = (slideIndex === 0) ? slideImages.length - 1 : slideIndex - 1;
    setSlideIndex(newIndex);
  }

  const handleNextSlide = () => {
    const newIndex = (slideIndex === slideImages.length - 1) ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
  }
  const containerWidth = 100 / 3;

  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="image-carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${slideIndex * containerWidth}%)`, width: `${containerWidth}%` }}>
          {slides.map((slide, index) => (
            <img key={index} src={slide} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <img onClick={handlePrevSlide} src={arrowPrevious} />
        <img onClick={handleNextSlide} src={arrowNext} />
      </div>
    </section>
  )
}

export default Work