import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'work', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Run initially to set the correct active section based on current scroll or hash
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1));
    }
  }, [location.hash]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  // If on project details page, navigation is different
  const isHome = location.pathname === '/';

  return (
    <header className={`header ${isScrolled ? 'sticky' : ''}`}>
      <Link to="/" className="logo" onClick={closeMenu}>Prajwal Bhutkar</Link>

      <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu}></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        {isHome ? (
          <>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={closeMenu}>Experience</a>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={closeMenu}>Education</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills</a>
            <a href="#work" className={activeSection === 'work' ? 'active' : ''} onClick={closeMenu}>Work</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a>
          </>
        ) : (
          <Link to="/" onClick={closeMenu}>← Back to Portfolio</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
