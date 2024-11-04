import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`gallery ${className}`} style={{ width, height }}>
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        style={{ borderRadius: radius, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <button 
        className="arrow left" 
        onClick={handlePrev} 
        disabled={currentIndex === 0}
      >
        <img src="assets/icons/arrow-left.svg" alt="Previous" />
      </button>
      <button 
        className="arrow right" 
        onClick={handleNext} 
        disabled={currentIndex === images.length - 1}
      >
        <img src="assets/icons/arrow-right.svg" alt="Next" />
      </button>
      
      {showThumbs && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: '117px',
                height: '95px',
                borderRadius: radius,
                border: currentIndex === index ? '2px solid primary' : 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
