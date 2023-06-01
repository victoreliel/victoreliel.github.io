import React from 'react';
import {useState, useEffect} from 'react';
import {experienceData} from '../data/experienceData';
import scrollReveal from 'scrollreveal';
import '../styles/Experience.css';

export default function Experience() {
  const [objects] = useState(experienceData);

  useEffect(() => {
    scrollReveal().reveal('.experience-item', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      delay: 100,
      interval: 200,
      reset: true,
    });
  }, []);

  return (
    <div id="experience" className="experience">
      <p className="title">Experiência Profissional</p>
      <div className="experiences">
        {objects.map((object) => (
          <div key={object.id} className="experience-item">
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
