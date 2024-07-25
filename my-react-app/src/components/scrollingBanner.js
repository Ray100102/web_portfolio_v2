import React from 'react';
import './banner.css';

const ScrollingBanner = () => {
  const words = [
    'Innovation', 'Efficiency', 'Data Science', 'Enterprise', 
    'Technology', 'Integration', 'Platforms', 'Transformation'
  ];

  return (
    <div className="banner-container">
      <div className="banner">
        {words.map((word, index) => (
          <span key={index} className="banner-item">{word}</span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;