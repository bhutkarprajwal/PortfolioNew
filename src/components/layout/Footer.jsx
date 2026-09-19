import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>&copy; {currentYear} Prajwal Bhutkar. All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#top" onClick={scrollToTop} aria-label="Scroll to Top">
          <i className='bx bx-up-arrow-alt'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
