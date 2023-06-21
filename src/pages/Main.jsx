import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import '../styles/Main.css';

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="home" className={`main ${theme === 'light' ? 'light' : 'dark'}`}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contacts />
      <Footer />
    </div>
  );
}
