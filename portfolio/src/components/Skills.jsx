/* eslint-disable max-len */
import React from 'react';
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
        <p className="subtitle">Comunicação e Assertividade:</p>
        <p className="description">Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit</p>
        <p className="subtitle">Trabalho em Equipe:</p>
        <p className="description">Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit</p>
        <p className="subtitle">Colaboração:</p>
        <p className="description">Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit</p>
        <p className="subtitle">Feedback:</p>
        <p className="description">Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit</p>
        <p className="subtitle">Empatia:</p>
        <p className="description">Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit</p>
      </div>
    </div>
  );
}
