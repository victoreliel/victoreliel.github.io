import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  const scrollToAnchor = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('skills')}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('projects')}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('education')}>
            Education
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('experience')}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => scrollToAnchor('contacts')}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
