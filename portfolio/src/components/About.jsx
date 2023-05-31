import React from 'react';
import aboutData from '../data/aboutData';
import ProfilePicture from '../assets/profile.jpg';
import '../styles/About.css';

export default function About() {
  return (
    <div id="about" className="about">
      <div className="img-container">
        <img src={ProfilePicture} alt="foto de perfil" className="pp"/>
      </div>
      <div className="vertical-bar"/>
      <div className="presentation">
        <p className="name">Victor Eliel Ferranti Macedo</p>
        <p className="role">Full Stack Web Developer</p>
        <p>{aboutData.description1}</p>
      </div>
    </div>
  );
}
