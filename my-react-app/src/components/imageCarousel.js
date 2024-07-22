import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        &lt;
      </button>
      <div className="carousel-card">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
