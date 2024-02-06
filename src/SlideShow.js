import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // Ensure this file exists and contains the necessary styles

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!zoomed) { // Only auto-advance if not zoomed in
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 3000); // Change slides every 3 seconds
    return () => clearTimeout(timer);
  }, [currentIndex, slides.length, zoomed]);

  const goToPrevious = () => {
    setZoomed(false); // Reset zoom on manual navigation
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setZoomed(false); // Reset zoom on manual navigation
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''} ${zoomed ? 'zoomed' : ''}`}
          onClick={toggleZoom}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default SlideShow;
