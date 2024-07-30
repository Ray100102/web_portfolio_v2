import React from 'react';
import '../stylesheets/banner.css';
import py from '../assets/python.png';
import java from '../assets/java.png';
import c from '../assets/c++.png';
import swift from '../assets/swift.png';
import react from '../assets/react.webp';
import git from '../assets/git.webp';
import node from '../assets/node.png';
import firebase from '../assets/firebase.png';
import aws from '../assets/aws.png';
import postgres from '../assets/postgres.png';
import mongo from '../assets/mongo.png';
import js from '../assets/js.png';
import ts from '../assets/ts.png';
import linux from '../assets/linux.png';
import html from '../assets/html.png'
import css from '../assets/css.png'

const ScrollingBanner = ({ reverse }) => {
  const images = [
    py, java, c, ts, js, swift, html, css, react, firebase,  postgres, mongo, aws, node, git, linux

  ];

  const images2 = [

  ];

  const repeatedImages = reverse ? [...images2, ...images2, ...images2, ...images2,
    ...images2, ...images2, ...images2, ...images2, ...images2, ...images2,
    ...images2, ...images2, ...images2, ...images2, ...images2, ...images2
  ] : [...images, ...images, ...images, ...images,
    ...images, ...images, ...images, ...images, ...images, ...images,
    ...images, ...images, ...images, ...images, ...images, ...images
  ];

  const bannerContentClass = reverse ? 'banner-content' : 'banner-content2';

  return (
    <div>
      <div className="banner-container">
        <div className="banner">
          <div className={bannerContentClass}>
            {repeatedImages.map((image, index) => (
              <img key={index} src={image} alt={`banner-img-${index}`} className="banner-item" />
            ))}
          </div>
          <div className={bannerContentClass}>
            {repeatedImages.map((image, index) => (
              <img key={index + images.length} src={image} alt={`banner-img-${index + images.length}`} className="banner-item" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
