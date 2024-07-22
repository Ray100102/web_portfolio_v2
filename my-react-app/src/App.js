import './stylesheets/colorTheme.css';
import './stylesheets/mainPage.css';
import './stylesheets/navbar.css';
import temp from './assets/temp.png';
import temp2 from './assets/temp2.png';
import pfp from './assets/temp_pfp.jpg';
import ImageCarousel from './components/imageCarousel.js';

function App() {
  const images = [
    temp,
    temp2,
    temp2
  ];

  return (
    <div className="page">
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="#home" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="#section1" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="#section2" className="navbar-link">Experience</a>
            </li>
            <li className="navbar-item">
              <a href="#section3" className="navbar-link">Projects</a>
            </li>
            <li className="navbar-item">
              <a href="#section4" className="navbar-link">Socials</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="home"/>
      <div className = "container">
        <div className = "title">
          Ray
        </div>
        <div className = "title">
          Guo
        </div>
        <div className="image-wrapper">
          <img src={pfp} className="profilePicture" />
        </div>
        <div id="section1" className="section">
          <h2>About</h2>
          <p>Carousel</p>
        </div>
        <div id="section2" className="section">
          <h2>Experience</h2>
          <p>This is the second section.</p>
        </div>
        <div id="section3" className="section">
          <h2>Projects</h2>
          <p>Still Bubble format</p>
        </div>
        <div id="section4" className="section">
          <h2>Socials</h2>
          <p>IDK</p>
        </div>
      {/*<ImageCarousel images={images}/>*/}
      </div>

    </div>
  );
}

export default App;
