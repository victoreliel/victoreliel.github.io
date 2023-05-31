import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
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
          <Link to="/" onClick={() => scrollToAnchor('home')}>
            Home
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('about')}>
            About
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
            Education
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('experience')}>
            Experience
          </Link>
        </li>
        <li className="shadow-effect">
          <Link to="/" onClick={() => scrollToAnchor('contacts')}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
