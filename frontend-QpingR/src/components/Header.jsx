import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn, userName, setIsModalOpen }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">QpingR</div>
        <button
          className="hamburger"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          
        </button>
        <nav className={isNavOpen ? 'mobile-active' : ''}>
          <a href="#about">About Us</a>
          <a href="#features">Features</a>
          <a href="#partners">Partners</a>
          <a href="#testimonials">Testimonials</a>
          {isLoggedIn ? (
            <>
              <span className="user-name">Hi, {userName}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <a href="#" onClick={() => setIsModalOpen(true)}>
              Sign In
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;