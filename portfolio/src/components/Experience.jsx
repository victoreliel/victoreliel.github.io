import React from 'react';
import {useState} from 'react';
import {experienceData} from '../data/experienceData';
import '../styles/Experience.css';

export default function Experience() {
  const [objects] = useState(experienceData);

  return (
    <div id="experience" className="experience">
      <p className="title">Experiência Profisional</p>
      <div className="experiences">
        {objects.map((object) => (
          <div key={object.id}>
            <p className="company">{object.company}</p>
            <p className="role">{object.jobtitle}</p>
            <p className="job-years">
              {`Ano de Início: ${object.startYear}`}
            </p>
            <p className="job-years">
              {typeof object.endYear == 'string' ? 'Este é meu trabalho atual' :
            `Ano de Conclusão: ${object.endYear}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
