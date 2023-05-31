import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <nav className="navbar">
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
      </ul>
    </nav>
  );
}
