import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';

export default function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="projects" className={`projects ${theme === 'light' ? 'light' : 'dark'}`}>
      <Header />
      Projects
    </div>
  );
}
