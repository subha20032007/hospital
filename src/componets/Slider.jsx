import React, { useState } from 'react';
import './Slider.css';

const images =  [
    "https://www.narayanahealth.org/sites/default/files/styles/hero_desktop_banner/public/branddesk.jpg?itok=FNFePq0E",
    "https://www.narayanahealth.org/sites/default/files/styles/hero_desktop_banner/public/desktop_robo.jpg?itok=KxTv0YkW",
    "https://www.narayanahealth.org/sites/default/files/styles/hero_desktop_banner/public/desktop-insurance.jpg?itok=iC9Xjyk1",
    "https://www.narayanahealth.org/sites/default/files/styles/hero_desktop_banner/public/desktop-can.jpg?itok=qXeBM64J",
   
  ];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button onClick={goToPrevImage} className="arrow-button left">
        &#8249;
      </button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
      <button onClick={goToNextImage} className="arrow-button right">
        &#8250;
      </button>
    </div>
  );
};

export default Slider;