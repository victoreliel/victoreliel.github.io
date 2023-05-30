import React from 'react';
import aboutData from '../data/aboutData';
import ProfilePicture from '../assets/profile.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <div id="about" className="about">
      <img src={ProfilePicture} alt="foto de perfil" className="pp"/>
      <div>
        <h3>Full Stack Web Developer</h3>
        <h1>Victor Eliel</h1>
        <p className="description">{aboutData.description1}</p>
      </div>
    </div>
  );
}
