import React from 'react';
import '../stylesheets/banner.css';

const ScrollingBanner = () => {
  const words = [
    'Full-Stack', ' Innovation', 
    'Technology', ' SWE', ' Product-Oriented', ' Driven'
  ];

  // Create a duplicated array to achieve the wrapping effect
  const repeatedWords = [...words, ...words, ...words, ...words
    , ...words, ...words, ...words, ...words, ...words, ...words
    , ...words, ...words, ...words, ...words, ...words, ...words
  ];

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-content">
          {repeatedWords.map((word, index) => (
            <span key={index} className="banner-item">{word}</span>
          ))}
        </div>
        <div className="banner-content">
          {repeatedWords.map((word, index) => (
            <span key={index + words.length} className="banner-item">{word}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
