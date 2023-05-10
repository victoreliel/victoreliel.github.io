import React from 'react'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contacts />
      <Footer />
    </div>
  )
}
