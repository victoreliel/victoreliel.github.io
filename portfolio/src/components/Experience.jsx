import React from 'react';
import {useState} from 'react';
import {experienceData} from '../data/experienceData';
import '../styles/Experience.css';

export default function Experience() {
  const [objects] = useState(experienceData);

  return (
    <div id="experience">
      <h1>Experience</h1>
      {objects.map((object) => (
        <div key={object.id}>
          <p>{object.company}</p>
          <p>{object.jobtitle}</p>
          <p>{`Ano de Início: ${object.startYear}`}</p>
          <p>
            {typeof object.endYear === 'string' ? 'Este é meu trabalho atual' :
            `Ano de Conclusão: ${object.endYear}`}
          </p>
        </div>
      ))}
    </div>
  );
}
