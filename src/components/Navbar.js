import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Devify</span>
        </Link>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courses" className="navbar-link">Courses</Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link">Resources</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">Blog</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
        </ul>
        
        <div className={`navbar-actions ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/signup" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;