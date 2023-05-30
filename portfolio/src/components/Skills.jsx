import React from 'react';
import {useState} from 'react';
import {skillsData} from '../data/skillsData';
import '../styles/Skills.css';

export default function Skills() {
  const [object] = useState(skillsData);

  const string = Object.values(object).join(', ');

  return (
    <div id="skills">
      <h1>Skills</h1>
      <p>{string}</p>
    </div>
  );
}
