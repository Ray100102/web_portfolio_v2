import React, { useContext } from 'react';
import { DarkModeContext } from './darkModeContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../stylesheets/navbar.css'; // Import the CSS for the Navbar

const Navbar = () => {
  const { isDarkMode, toggleColorMode } = useContext(DarkModeContext);

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#experience" className="navbar-link">Experience</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
        </ul>
        <ul className="navbar-socials">
          <li className="navbar-item navbar-icon">
            <div onClick={toggleColorMode} className="navbar-link color-mode-toggle">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
          </li>
          <li className="navbar-item navbar-icon">
            <a href="https://www.linkedin.com/in/ray-g-903ab8200/" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="navbar-item navbar-icon">
            <a href="https://github.com/Ray100102" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="navbar-item navbar-icon">
            <a href="mailto:rguo10102@gmail.com" className="navbar-link" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
