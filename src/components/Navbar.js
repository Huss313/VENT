import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ onNavigate, currentPage, darkMode, toggleDarkMode }) => {
  const handleProjectsClick = () => {
    // Only navigate if we're not already on the projects page
    if (currentPage !== 'projects-list') {
      onNavigate('projects-list');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <Container>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['about', 'services', 'team', 'contact'].map((section) => (
              <li key={section} className="nav-item">
                <ScrollLink
                  className="nav-link"
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-56}
                  onClick={() => window.scrollTo(0, 0)} // Reset scroll position
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
            <li className="nav-item">
              <button
                className={`nav-link btn btn-link ${currentPage === 'projects-list' ? 'active' : ''}`}
                onClick={handleProjectsClick}
                disabled={currentPage === 'projects-list'}
              >
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem'
                }}
              >
                {darkMode ? (
                  <FaSun style={{ color: '#ffc107', fontSize: '1.25rem' }} />
                ) : (
                  <FaMoon style={{ color: '#212529', fontSize: '1.25rem' }} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;