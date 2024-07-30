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
            <div>Full-Stack Dev</div>
          </div>
          <div>
            <div>Program Manager</div>
          </div>
          <div>
            <div>Software Engineer</div>
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
