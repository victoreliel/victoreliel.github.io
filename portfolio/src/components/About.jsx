import React from 'react';
import aboutData from '../data/aboutData';
import '../styles/About.css';

export default function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <p>{aboutData.description1}</p>
    </div>
  );
}
