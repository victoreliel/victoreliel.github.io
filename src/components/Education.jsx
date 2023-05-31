import React from 'react';
import {useState} from 'react';
import {educationData} from '../data/educationData';
import '../styles/Education.css';

export default function Education() {
  const [object] = useState(educationData);

  return (
    <div id="education" className="education">
      <p className="title">Formação</p>
      <p className="course">{object.institution}</p>
      <p className="subtitle">{object.course}</p>
      <p className="description">{object.description}</p>
      <p className="description">
        {`Comecei o curso em abril de ${object.startYear} e concluí em maio de 
        ${object.endYear}`}
      </p>
    </div>
  );
}
