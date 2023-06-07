import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { socialsData } from '../data/socialsData';
import '../styles/Navbar.css';

export default function Navbar() {
  const [socials] = useState(socialsData);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${theme === 'light' ? 'light' : 'dark'}`}>
      <button type="button" onClick={toggleTheme} className={`theme-switch ${theme}`}>
        <span className="switch-text">{theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}</span>
        <span className="switch-slider" />
      </button>
      <ul>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToTop()}>
            Home
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('about')}>
            Sobre
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('skills')}>
            Skills
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('projects')}>
            Projetos
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('education')}>
            Formação
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('experience')}>
            Experiência Profissional
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('contacts')}>
            Contato
          </Link>
        </li>
        <li className="shadow-effect">
          <a href={socials.repository}>Repositório</a>
        </li>
      </ul>
    </nav>
  );
}
