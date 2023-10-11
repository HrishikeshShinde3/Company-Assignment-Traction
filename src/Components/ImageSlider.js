// src/components/ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg',

    'https://cdn.pixabay.com/photo/2023/09/16/17/13/cat-8257177_1280.jpg',

    'https://cdn.pixabay.com/photo/2023/08/08/15/37/landscape-8177622_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/08/06/21/29/flower-8173829_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/10/06/02/49/flowers-8297333_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide} className="slider-button prev">
        Prev.
      </button>
      <img
        src={process.env.PUBLIC_URL + images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slider-image"
      />
      <button onClick={nextSlide} className="slider-button next">
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
