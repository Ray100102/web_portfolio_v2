import React from 'react';
import '../stylesheets/title.css'; // Import the CSS for the TitleSection

const TitleSection = () => {
  return (
    <div className="title-section">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="title">
        Ray         Guo
      </div>
      <div id="container">
        <div id="flip">
          <div>
            <div>Full-Stack SWE</div>
          </div>
          <div>
            <div>Tech Enthusiast</div>
          </div>
          <div>
            <div>Future Ready</div>
          </div>
        </div>
      </div>
      {/* 
      <div className="image-wrapper">
        <img src={pfp} className="profilePicture" />
      </div> 
      */}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default TitleSection;
