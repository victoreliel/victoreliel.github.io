import React from 'react';
import {useEffect} from 'react';
import softSkillsData from '../data/softSkillsData';
import technologiesIcons from '../helpers/technologies';
import scrollReveal from 'scrollreveal';
import '../styles/Skills.css';

export default function Skills() {
  useEffect(() => {
    scrollReveal().reveal('.scroll-reveal', {
      duration: 500,
      distance: '20px',
      origin: 'bottom',
      easing: 'ease-in-out',
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  useEffect(() => {
    scrollReveal().reveal('.horizontal', {
      duration: 500,
      distance: '20px',
      origin: 'left',
      easing: 'ease-in-out',
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div id="skills">
      <div className="hard-skills">
        <p className="title">Hard Skills</p>
        <div className="technologies">
          <div className="horizontal">{technologiesIcons('react')}</div>
          <div className="horizontal">{technologiesIcons('javascript')}</div>
          <div className="horizontal">{technologiesIcons('html')}</div>
          <div className="horizontal">{technologiesIcons('css')}</div>
          <div className="horizontal">{technologiesIcons('jest')}</div>
          <div className="horizontal">{technologiesIcons('git')}</div>
          <div className="horizontal">{technologiesIcons('redux')}</div>
          <div className="horizontal">{technologiesIcons('typescript')}</div>
          <div className="horizontal">{technologiesIcons('docker')}</div>
          <div className="horizontal">{technologiesIcons('nodejs')}</div>
          <div className="horizontal">{technologiesIcons('mongodb')}</div>
          <div className="horizontal">{technologiesIcons('mysql')}</div>
          <div className="horizontal">{technologiesIcons('python')}</div>
        </div>
      </div>
      <div className="soft-skills">
        <p className="title">Soft Skills</p>
        <p className="subtitle scroll-reveal">Comunicação:</p>
        <p className="description scroll-reveal">
          {softSkillsData.communication}
        </p>
        <p className="subtitle scroll-reveal">Trabalho em Equipe:</p>
        <p className="description scroll-reveal">{softSkillsData.teamWork}</p>
        <p className="subtitle scroll-reveal">Colaboração:</p>
        <p className="description scroll-reveal">
          {softSkillsData.collaboration}
        </p>
        <p className="subtitle scroll-reveal">Feedback:</p>
        <p className="description scroll-reveal">{softSkillsData.feedback}</p>
        <p className="subtitle scroll-reveal">Empatia:</p>
        <p className="description scroll-reveal">{softSkillsData.empathy}</p>
      </div>
    </div>
  );
}
