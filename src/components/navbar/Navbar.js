import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Close mobile menu when route changes
    closeMobileMenu();
  }, [location]);

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={closeMobileMenu}>
        <img src="/logotransparent.png" alt="" />
      </Link>

      <div className={`menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/jewellery" onClick={closeMobileMenu} className={location.pathname === '/jewellery' ? 'active' : ''}>
          Jewellery
        </Link>
        <Link to="/homedecor" onClick={closeMobileMenu} className={location.pathname === '/homedecor' ? 'active' : ''}>
          HomeDecor
        </Link>
        <Link to="/fooditems" onClick={closeMobileMenu} className={location.pathname === '/fooditems' ? 'active' : ''}>
          Food Items
        </Link>
        <Link to="/clothes" onClick={closeMobileMenu} className={location.pathname === '/clothes' ? 'active' : ''}>
          Fashion
        </Link>

        <Link to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>
          About Us
        </Link>

        <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>
          <button className="book-meeting1">Login</button>
        </Link>
      </div>

      <Link to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>
        <button className="book-meeting">Login</button>
      </Link>

      <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
