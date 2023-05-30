import React from 'react';
import {useState} from 'react';
import {educationData} from '../data/educationData';
import '../styles/Education.css';

export default function Education() {
  const [object] = useState(educationData);

  return (
    <div id="education">
      <h1>Education</h1>
      <p>{object.institution}</p>
      <p>{object.course}</p>
      <p>{object.description}</p>
      <p>
        {`Comecei o curso em abril de ${object.startYear} e concluí em maio de 
        ${object.endYear}`}
      </p>
    </div>
  );
}
