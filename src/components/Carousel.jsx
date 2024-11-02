import { useState } from "react";

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const nextSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    const prevSlide = () => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    return (
      <div className="carousel" w = '100%' h = '100%' overflow = 'hidden' >
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="carousel__img"
          style = {{borderRadius:'5px'}}
        />
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
          &lt;
        </button>
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
          &gt;
        </button>
      </div>
    );
  };
  export default Carousel;