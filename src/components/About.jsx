import React from 'react';
import aboutData from '../data/aboutData';
import {AiOutlineCloudDownload} from 'react-icons/ai';
import ProfilePicture from '../assets/profile.jpg';
import curriculum from '../assets/Currículo.pdf';
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
        <div className="download">
          <AiOutlineCloudDownload/>
          <a href={curriculum} download>Baixar Currículo</a>
        </div>
      </div>
    </div>
  );
}
