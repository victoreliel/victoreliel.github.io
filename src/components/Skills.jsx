/* eslint-disable max-len */
import React from 'react';
import softSkillsData from '../data/softSkillsData';
import technologiesIcons from '../helpers/technologies';
import '../styles/Skills.css';

export default function Skills() {
  return (
    <div id="skills">
      <div className="hard-skills">
        <p className="title">Hard Skills</p>
        <div className="technologies">
          {technologiesIcons('react')}
          {technologiesIcons('javascript')}
          {technologiesIcons('html')}
          {technologiesIcons('css')}
          {technologiesIcons('jest')}
          {technologiesIcons('git')}
          {technologiesIcons('redux')}
          {technologiesIcons('typescript')}
          {technologiesIcons('docker')}
          {technologiesIcons('nodejs')}
          {technologiesIcons('mongodb')}
          {technologiesIcons('mysql')}
          {technologiesIcons('python')}
        </div>
      </div>
      <div className="soft-skills">
        <p className="title">Soft Skills</p>
        <p className="subtitle">Comunicação:</p>
        <p className="description">{softSkillsData.communication}</p>
        <p className="subtitle">Trabalho em Equipe:</p>
        <p className="description">{softSkillsData.teamWork}</p>
        <p className="subtitle">Colaboração:</p>
        <p className="description">{softSkillsData.collaboration}</p>
        <p className="subtitle">Feedback:</p>
        <p className="description">{softSkillsData.feedback}</p>
        <p className="subtitle">Empatia:</p>
        <p className="description">{softSkillsData.empathy}</p>
      </div>
    </div>
  );
}
